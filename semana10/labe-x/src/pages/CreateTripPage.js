import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage'

import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import ButtonAction from '../components/ButtonAction/ButtonAction'
import CreateTripForm from '../components/CreateTripForm/CreateTripForm'

import BackIcon from '../icons/undo.png'
import BuyTicketIcon from '../icons/login.png'

import { goToLastPage, goToApllicationFormPage } from '../router/coordinator'

export default function CreateTripPage() {
    useProtectedPage()
    const history = useHistory()

    const menuOptions = [
        <ButtonAction onClick={() => goToLastPage(history)}>
            <img src={BackIcon} alt='back'/>
            Voltar
        </ButtonAction>,
        <ButtonAction onClick={() => goToApllicationFormPage(history)}>
            Logout
            <img src={BuyTicketIcon} alt='back'/>
        </ButtonAction>
    ]

    return (
        <div>
            <Header />
            <Nav>{menuOptions}</Nav>
            <CreateTripForm />
        </div>
    )
}
