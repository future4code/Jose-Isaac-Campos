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
    padding: 2% 0;
    width: 96%;
    border-radius: 8px;
    transition: all 0.4s;
    background-color: rgba(34, 47, 62, .18);

    & > span {
        font-size: 1.2vw;
        letter-spacing: 2px;
    }

    &:hover {
        transform: scale(1.02);
        background-color: rgba(34, 47, 62, .22);
        transition: all 0.4s;
    }
`

const Icon = styled.img`
    width: 60px;
    height: 60px;
    margin: 0 4%;
    border-radius: 10px;
`
