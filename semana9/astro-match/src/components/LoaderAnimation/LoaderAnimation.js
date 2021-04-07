import React from 'react'
import styled, {keyframes} from 'styled-components'
import Passion from '../../icons/passion.png'


export default function LoaderAnimation() {
    return (
        <Main>
            <Icon src={Passion} alt='logo' />
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const LoadingAnimation = keyframes`
    from {
        transform: scale(1)
    }

    to {
        transform: scale(1.6)
    }
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
    animation: ${LoadingAnimation} .8s infinite alternate;
`



