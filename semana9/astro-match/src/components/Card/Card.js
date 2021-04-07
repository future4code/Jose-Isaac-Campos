import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
    return (
        <Main>
            <Icon src={props.profile.photo} alt={props.profile.name} />
            <span>{props.profile.name}</span>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    align-items: center;
    margin: 1.1%;
    padding: 4% 0;
    width: 96%;
    border-radius: 8px;

    background-color: rgba(34, 47, 62, .18);

    & > span {
        font-size: 1.2vw;
        letter-spacing: 2px;
    }
`

const Icon = styled.img`
    width: 60px;
    height: 60px;
    margin: 0 4%;
    border-radius: 10px;
`
