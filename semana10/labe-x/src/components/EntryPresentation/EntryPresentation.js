import React from 'react'

import LocationIllustration from '../../illustrations/undraw_Location_search_re_ttoj.svg'

import {Main, Illustration, ActionContainer} from './entryPresentation-style'
import ButtonAction from '../ButtonAction/ButtonAction'

export default function EntryPresentation() {
    return (
        <Main>
            <Illustration src={LocationIllustration} alt='ilustração de uma ponto de localização' />

            <ActionContainer>
                <ButtonAction>Buscar Viagens</ButtonAction>
                <ButtonAction>área Administrativa</ButtonAction>
            </ActionContainer>
        </Main>
    )
}
