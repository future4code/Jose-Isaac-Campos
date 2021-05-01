import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useRequestDataWithAuth } from "../../hooks/useRequestData"

import {
  Main,
  ContainerCardInfo,
  TitleSection,
  CardInfo,
  ListCandidates,
  ContainerButtonAction,
  Icon,
} from "./tripDetails-style"
import ButtonAction from "../ButtonAction/ButtonAction"

import CheckIcon from "../../icons/check (2).png"
import CancelIcon from "../../icons/cancel (2).png"

export default function TripDetails() {
  const params = useParams()
  const [trip, setTrip] = useState({})

  const token = window.localStorage.getItem("token")

  useRequestDataWithAuth(`/trip/${params.id}`, {}, token).then((response) => {
    setTrip(response.trip)
  })

  return (
    <Main>
      <ContainerCardInfo>
        <TitleSection>Detalhes da viagem</TitleSection>
        {trip && (
          <CardInfo>
            <p>
              <span>Nome:</span>
              {trip.name}
            </p>
            <p>
              <span>Planeta:</span>
              {trip.planet}
            </p>
            <p>
              <span>Duração:</span>
              {trip.durationInDays}
            </p>
            <p>
              <span>Data:</span>
              {trip.date}
            </p>
            <p>
              <span>Descrição:</span>
              {trip.description}
            </p>
          </CardInfo>
        )}
      </ContainerCardInfo>

      <ContainerCardInfo>
        <TitleSection>candidatos pendentes</TitleSection>
        <ListCandidates>
          {trip &&
            trip.candidates &&
            trip.candidates.map((candidate) => {
              return (
                <CardInfo>
                  <div>
                    <p>
                      <span>Nome:</span>
                      {candidate.name}
                    </p>
                    <p>
                      <span>Profissão:</span>
                      {candidate.profession}
                    </p>
                    <p>
                      <span>Idade:</span>
                      {candidate.age}
                    </p>
                    <p>
                      <span>País:</span>
                      {candidate.country}
                    </p>
                    <p>
                      <span>Texto de candidatura:</span>
                      {candidate.applicationText}
                    </p>
                  </div>
                  <ContainerButtonAction>
                    <ButtonAction>
                      <Icon src={CheckIcon} />
                      Aprovar
                    </ButtonAction>
                    <ButtonAction>
                      <Icon src={CancelIcon} />
                      Reprovar
                    </ButtonAction>
                  </ContainerButtonAction>
                </CardInfo>
              )
            })}
        </ListCandidates>
      </ContainerCardInfo>

      <ContainerCardInfo>
          <TitleSection>candidatos aprovados</TitleSection>
          <ListCandidates>
          {trip &&
            trip.candidates &&
            trip.candidates.map(candidate => {
                return <CardInfo>
                    <p>{candidate.name}</p>
                </CardInfo>
            })
          }
          </ListCandidates>
      </ContainerCardInfo>
    </Main>
  )
}
