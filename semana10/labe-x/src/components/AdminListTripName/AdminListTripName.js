import React, { useState } from "react"
import { useRequestData } from "../../hooks/useRequestData"

import { Main, ListTrip, Trip, IconAction, ContainerNewTrip, Icon } from "./adminListTripName-style"
import BinIcon from '../../icons/bin.png'
import AddIcon from '../../icons/sinal-de-mais.png'
import ButtonAction from '../ButtonAction/ButtonAction'

import TitlePage from "../TitlePage/TitlePage"
export default function AdminListTripName() {
  const [trips, setTrips] = useState([])

  useRequestData("/trips", {}).then((response) => {
    setTrips(response.trips)
  })

  return (
    <Main>
      <TitlePage>viagens cadastradas</TitlePage>
      <ListTrip>
          {trips && trips.map(trip => {
              return <Trip key={trip.id}><p><span>Nome:</span>{trip.name}</p><IconAction src={BinIcon}/></Trip>
          })} 
      </ListTrip>
      <ContainerNewTrip>
        <ButtonAction><Icon src={AddIcon} />Nova viagem</ButtonAction>
    </ContainerNewTrip>
    </Main>
  )
}
