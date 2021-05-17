import styled from 'styled-components'

export const Main = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    width: 14%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: all .6s;
    padding: 4px 0;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        position: relative;
        width: 60%;
        padding: 0;
        margin: 4% auto;
        top: auto;
        left: auto;
    }


    :hover {
        transition: all .4s;
        box-shadow: 2px 2px 8px rgba(30,14,255,.2);
        border-radius: 8px;
        backface-visibility: hidden;
    }
`

export const LogoIcon = styled.img`
    width: 40px;
    padding: 4px 0;
`

export const LogoText = styled.h1`
    font-size: 1.6em;
    letter-spacing: 4px;
    font-weight: 500;
`