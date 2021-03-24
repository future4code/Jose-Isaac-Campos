import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 10px;
    width: 90%;
    margin: 2%;
    font-size: 1.2em;
    text-transform: uppercase;
`

export default class BtnAction extends React.Component {
    render() {
        return (
            <Button onClick={this.props.nextPage}>{this.props.value}</Button>
        )
    }
}