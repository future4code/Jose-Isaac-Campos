import React, { useState } from 'react'
import { useRequestData } from '../../hooks/useRequestData'

import { Main, Content, Trip } from './listTrip-style'
import TitlePage from '../TitlePage/TitlePage'

export default function ListTrip() {
    const [trips, setTrips] = useState([])

    useRequestData('/trips', {})
        .then(response => {
            setTrips(response.trips)
        })

    return (
        <Main>
            <TitlePage>viagens Disponiveis</TitlePage>
            <Content>
                {trips && trips.map(trip => {
                    return (<Trip>
                        <p><span>Nome:</span>{trip.name}</p>
                        <p><span>Planeta:</span>{trip.planet}</p>
                        <p><span>Data:</span>{trip.date}</p>
                        <p><span>Duração:</span>{trip.durationInDays}</p>
                        <p><span>Descrição:</span>{trip.description}</p>
                    </Trip>)
                })}
            </Content>
        </Main>
    )
}
