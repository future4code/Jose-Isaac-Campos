import styled from 'styled-components'

export const Main = styled.header`
    width: 100%;
    height: 6%;
    background-color: #485460;
    padding: 2% 0;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 4% 0;
    }
`

export const Icon = styled.img`
    width: 4vw;
    cursor: pointer;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 8vw;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        width: 6vw;
    }
`