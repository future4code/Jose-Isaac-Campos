import React from 'react'
import {Main, Icon} from './header-style'

import Logo from '../../icons/nave-espacial.png'

export default function Header() {
    return (
        <Main>
            <Icon src={Logo} alt='Logo' />
        </Main>
    )
}
