import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    padding: 10px;
    width: 90%;
    margin: 2%;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
`

export default class Thanks extends React.Component {
    render() {
        return (
            <P>Formulário enviado com sucesso!</P>
        )
    }
}