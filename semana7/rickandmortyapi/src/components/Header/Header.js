import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'

const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10% 0;

    & > h1 {
        letter-spacing: 2px;
        color: #2F4368;
        font-size: 6em;
        text-shadow: -2px -2px 16px #97ce4c;
    }

    & > h2 {
        margin: 4% 0;
        letter-spacing: 52px;
        font-size: 1.8em;
    }
`

export default class Header extends React.Component {
    render() {
        return (
            <DivMain>
                <h1>Rick and Morty</h1>
                <h2>Universe</h2>
                <Menu />
            </DivMain>
        )
    }
}
