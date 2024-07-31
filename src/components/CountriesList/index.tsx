import { FC } from 'react';
import { Box } from '@mui/material'
import CountriesListItem from '../CountriesListItem';
import { ICountry } from '../../models/countries'

type Props = {
    countriesList: ICountry[];
}

const CountriesList: FC<Props> = ({countriesList}) => {
  return (
    <Box
        margin={'0 auto'}
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        gap={'10px'}
      >

        {!countriesList ? "Список пуст" : countriesList.map((country, idx) => (
          <Box
            flex={'1 0 32%'}
            minWidth={'300px'}
            key={idx}
          >
            <CountriesListItem name={country.name.common} capital={country.capital?.[0] || ''} flag={country.flags.png} />
          </Box>
        ))}
      </Box>
  )
}

export default CountriesList