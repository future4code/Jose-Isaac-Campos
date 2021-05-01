import React from 'react'
import {useHistory} from 'react-router-dom'

import {Main, Icon} from './header-style'
import Logo from '../../icons/nave-espacial.png'

import {goToHomePage} from '../../router/coordinator'

export default function Header() {
    const history = useHistory()
    return (
        <Main>
            <Icon onClick={() => {goToHomePage(history)}} src={Logo} alt='Logo' />
        </Main>
    )
}
