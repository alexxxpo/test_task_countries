import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
    name: string,
    capital: string,
    flag: string,
}

const CountryCard: FC<Props> = ({ name, capital, flag }) => {

    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Вы выбрали страну:
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Столица: {capital}
                    </Typography>
                    <CardMedia
                        component="img"
                        image={flag}
                        alt="flag"
                    />
                </CardContent>
            </Card>
        </Container>
    )
}

export default CountryCard