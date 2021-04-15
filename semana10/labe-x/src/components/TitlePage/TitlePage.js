import React from 'react'
import styled from 'styled-components'

export default function TitlePage({children}) {
    return (
        <Title>
            {children}
        </Title>
    )
}

const Title = styled.h1`
    width: 100%;
    text-transform: uppercase;
    color: #34ACE0;
    padding-bottom: .1%;

    border-bottom: 3px solid #485460;
    border-radius: 4px;
`