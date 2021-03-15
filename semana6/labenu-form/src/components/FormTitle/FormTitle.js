import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-weight: 600;
    font-size: 1.4em;
    padding: 20px 0;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
`

export default class FormTitle extends React.PureComponent {
    render() {
        return (
            <Title>{this.props.title}</Title>
        )
    }
}