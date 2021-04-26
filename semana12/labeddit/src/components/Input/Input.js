import React from 'react'

import { Main, Icon, InputStyled } from './InputStyle'

export default function Input({icon, placeholder}) {
    return (
        <Main>
            <Icon src={icon} alt=''/>
            <InputStyled placeholder={placeholder}/>
        </Main>
    )
}
