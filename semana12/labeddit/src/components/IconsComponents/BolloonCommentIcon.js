import React from 'react'
import styled from 'styled-components'

import { ReactComponent as BalloonComponent } from '../../icons/speech-bubbles-with-ellipsis.svg'

export default function BalloonComponentIcon ({width, fillColor}) {
    return (
        <Main fill={fillColor} width={width}>
            <BalloonComponent/>
        </Main>
    )
}

const Main = styled.span`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg { 
        width: ${props => props.width};
        fill: ${props => props.fill};
        transition: all .6s;
    }
`
