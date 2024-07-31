import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { ICountry } from "../../models/countries"
import { getAllCountries } from "../../controllers/countries"
import CountriesList from "../../components/CountriesList"

function MainPage() {
  const [countriesList, setCountriesList] = useState<ICountry[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCountries().
      then(res => {
        setCountriesList(res?.data)
      }).
      finally(() => { setLoading(false) })
  }, [])

  if(loading) return <div>Загрузка данных</div>

  if(!countriesList) return <div>Данные не получены</div>

  return (
    <Container maxWidth="lg">
      <CountriesList countriesList={countriesList}/>
    </Container>
  )
}

export default MainPage