import React from 'react'
import {useHistory} from 'react-router-dom'

import LocationIllustration from '../../illustrations/undraw_Location_search_re_ttoj.svg'

import {Main, Illustration, ActionContainer} from './entryPresentation-style'
import ButtonAction from '../ButtonAction/ButtonAction'

import { goToLoginPage } from '../../router/coordinator'

export default function EntryPresentation() {
    const history = useHistory()

    return (
        <Main>
            <Illustration src={LocationIllustration} alt='ilustração de uma ponto de localização' />

            <ActionContainer>
                <ButtonAction>Buscar Viagens</ButtonAction>
                <ButtonAction onClick={() => goToLoginPage(history)}>área Administrativa</ButtonAction>
            </ActionContainer>
        </Main>
    )
}
