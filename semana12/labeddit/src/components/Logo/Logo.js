import React from 'react'

import { Main, LogoIcon, LogoText } from './LogoStyle'
import LogoSvg from '../../icons/bot.svg'

export default function Logo() {
    return (
        <Main>
            <LogoIcon src={LogoSvg} alt='LabEddit' />
            <LogoText>LabEddit</LogoText>
        </Main>
    )
}
