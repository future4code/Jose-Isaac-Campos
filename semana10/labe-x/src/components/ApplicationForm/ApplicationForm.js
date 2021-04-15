import React, { useState } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'

import TitlePage from '../TitlePage/TitlePage'
import ButtonAction from '../ButtonAction/ButtonAction'
import { Main, Form, Input, Select, Option } from './applicationForm-style'

import { countriesName } from '../../constants/countriesNameList'

export default function ApplicationForm() {
    const initialForm = { tripName: '', userName: '', age: '', applicationText: '', profession: '', countryName: '' }
    const [form, handleForm, resetForm] = useState(initialForm)
    const [trips, setTrips] = useState([])

    useRequestData('/trips', {})
        .then(response => {
            setTrips(response.trips)
        })

    return (
        <Main>
            <TitlePage>Comprar um bilhete</TitlePage>
            <Form>
                <Select>
                    <Option disabled>Escolha uma viagem:</Option>
                    {trips && trips.map(trip => {
                        return <Option>{trip.name}</Option>
                    })}
                </Select>

                <Input placeholder='Nome' />
                <Input placeholder='Idade' />
                <Input placeholder='Texto de candidatura' />
                <Input placeholder='Profissão' />

                <Select>
                    <Option disabled>Escolha um país:</Option>
                    {countriesName.map(country => {
                        return <Option>{country.nome}</Option>
                    })}
                </Select>

                <ButtonAction>Enviar</ButtonAction>
            </Form>
        </Main>
    )
}
