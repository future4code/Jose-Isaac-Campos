import React from 'react'
import styled from 'styled-components'

export default function ButtonClear(props) {
    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    )
}

const Button = styled.button`
    width: 100%;
    font-size: 1.6vw;
    text-transform: uppercase;
    letter-spacing: 20px;
    cursor: pointer;
    color: #ffffff;
    padding: .6% 0;
    position: fixed;
    bottom: 0px;
    background-color: rgba(34, 47, 62, .18);
    transition: all 1s;

    &:hover {
        background-color: rgba(34, 47, 62, .30);
        transform: scale(1.1); 
        transition: all 0.4s;
        letter-spacing: 10px;
    }

    @media screen and (max-width: 1024px) {
        font-size: 3vw;
    }

    @media screen and (max-width: 1024px) {
        font-size: 5vw;
        padding: 2%;
    }
`
