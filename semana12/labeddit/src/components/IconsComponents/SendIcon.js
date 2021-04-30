import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Send } from '../../icons/paper-plane.svg'

export default function SendIcon({width, fillColor, hoverFillColor}) {
    return (
        <Main hoverFill={hoverFillColor} fill={fillColor} width={width}>
            <Send/>
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

    &:hover {
        svg { 
            transition: fill .6s;
            fill: ${props => props.hoverFill};
            transform: scale(1.08);
        }
    }
`
