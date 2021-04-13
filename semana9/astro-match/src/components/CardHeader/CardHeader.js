import React from "react";
import styled from 'styled-components'
import Passion from '../../icons/passion.png'

import {Link} from 'react-router-dom'


export default function CardHeader() {
  return (
    <Main>
      <Link to={'/'}>
        <Icon src={Passion} alt="logo" />
      </Link>
      <Link to={'/'}>
        <h1>
          <span>astro</span>
          <span>match</span>
        </h1>
      </Link>
    </Main>
  );
}

const Main = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: .4% 0;
    width: 100%;

    background-color: rgba(255, 255, 255, .84);

    a {
      text-decoration: none;
    }

    h1 {
        letter-spacing: 4px;
        font-size: 2vw;

        margin: 2% 0;

        span {
            &:first-child {
                color: #0abde3;
                font-weight: 400;
            }

            &:last-child {
                color: #341f97;
                font-weight: 600;
            }
        }

        @media screen and (max-width: 1024px) {
          font-size: 3vw;
        }

        @media screen and (max-width: 414px) {
          font-size: 6vw;
        }
    }

    @media screen and (max-width: 1024px) {
      padding: 2% 0;
    }
`

const Icon = styled.img`
    width: 34px;
    height: 40px;
    cursor: pointer;
`

