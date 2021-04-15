import React from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import ButtonAction from '../components/ButtonAction/ButtonAction'
import ListTrip from '../components/ListTrip/ListTrip'

import BackIcon from '../icons/undo.png'
import BuyTicketIcon from '../icons/login.png'

import { goToLastPage, goToApllicationFormPage } from '../router/coordinator'

export default function ListTripPage() {
    const history = useHistory()

    const menuOptions = [
        <ButtonAction onClick={() => goToLastPage(history)}>
            <img src={BackIcon} alt='back'/>
            Voltar
        </ButtonAction>,
        <ButtonAction onClick={() => goToApllicationFormPage(history)}>
            Comprar bilhete
            <img src={BuyTicketIcon} alt='back'/>
        </ButtonAction>
    ]

    return (
        <div>
            <Header />
            <Nav>{menuOptions}</Nav>
            <ListTrip />
        </div>
    )
}
