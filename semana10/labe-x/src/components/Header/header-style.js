import styled from 'styled-components'

export const Main = styled.header`
    width: 100%;
    background-color: #485460;
    padding: 6% 0;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-device-width: 768px) {
        padding: 4% 0;
    }
`

export const Icon = styled.img`
    width: 40px;

    @media screen and (min-device-width: 768px) {
        width: 60px;
    }

    @media screen and (min-device-width: 1444px) {
        width: 80px;
    }
`