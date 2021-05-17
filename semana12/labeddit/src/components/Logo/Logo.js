import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeedPage } from '../../router/coordinator'
import { Main, LogoIcon, LogoText } from './LogoStyle'
import LogoSvg from '../../icons/bot.svg'

export default function Logo() {
    const history = useHistory()

    const goToFeed = () => {
        goToFeedPage(history)
    }

    return (
        <Main onClick={goToFeed}>
            <LogoIcon src={LogoSvg} alt='LabEddit' />
            <LogoText>LabEddit</LogoText>
        </Main>
    )
}
