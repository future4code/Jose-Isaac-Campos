import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    text-align: center;
    padding: 1%;

    & > h1 {
        font-size: 3.2em;
        font-family: 'Bellota', cursive;
        color: #f5f6fa;
        letter-spacing: 2px;
        font-style: italic;

        & > span {
            font-size: 1.2em;
        }
    }
`


export default class Header extends React.Component {
    render() {
        return (
            <HeaderStyle>
                <h1>Labe<span>fy</span></h1>
            </HeaderStyle>
        )
    }
}