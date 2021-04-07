import React from 'react'
import styled from 'styled-components'
import Cups from '../../icons/cups.png'

import {Link} from 'react-router-dom'


export default function ChangePAge(props) {
    return (
        <Main>
            <Link to={props.page} >
                <Icon src={Cups} alt='matchers' />
            </Link>
        </Main>
    )
}


const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
    background-color: rgba(34, 47, 62, .2);
    width: 100%;

    a {
        display: flex;
        align-items: center;
    }
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        width: 44px;
        height: 44px;
    }

    @media screen and (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }
`
