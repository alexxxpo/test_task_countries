import { FC } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

type Props = {
  name: string;
  capital: string;
  flag: string;
}

const CountriesListItem: FC<Props> = ({ capital, flag, name }) => {
  return (
    <Card>
      <NavLink to={'/country/' + name}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={flag}
            alt="flag"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
    </Card>
  )
}

export default CountriesListItem