import React from 'react'
import styled from 'styled-components'

import { ReactComponent as TitleIcon } from '../../icons/top.svg'

export default function TitlePostIcon ({width, fillColor}) {
    return (
        <Main fill={fillColor} width={width}>
            <TitleIcon/>
        </Main>
    )
}

const Main = styled.span`
    width: 100%;
    max-height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg { 
        width: ${props => props.width};
        fill: ${props => props.fill};
        transition: all .6s;
    }
`
