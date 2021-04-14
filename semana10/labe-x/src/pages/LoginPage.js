import React from 'react'
import {useHistory} from 'react-router-dom'

import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import ButtonAction from '../components/ButtonAction/ButtonAction'
import Login from '../components/Login/Login'
import BackIcon from '../icons/undo.png'

import {goToLastPage} from '../router/coordinator'

export default function LoginPage() {
    const history = useHistory()

    const menuOptions = [
        <ButtonAction onClick={() => goToLastPage(history)}>
            <img src={BackIcon} alt='back'/>
            Voltar
        </ButtonAction>
    ]
    return (
        <div>
            <Header />
            <Nav>{menuOptions}</Nav>
            <Login />
        </div>
    )
}
