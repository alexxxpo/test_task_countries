import { useEffect, useState } from 'react'
import CountryCard from '../../components/CountryCard'
import { useParams } from 'react-router-dom';
import { ICountry } from '../../models/countries';
import { getCountry } from '../../controllers/countries';

const CountryPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<ICountry | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCountry(name).then(res => { setCountry(res?.data[0]) }).finally(() => { setLoading(false) })
  }, [])

  if (loading) return <>Загрузка данных</>

  return (
    !country ? <div>Нет данных по этой стране</div> : <CountryCard name={country.name.common} capital={country.capital?.[0] || 'Не известна'} flag={country.flags.png} />
  )
}

export default CountryPage