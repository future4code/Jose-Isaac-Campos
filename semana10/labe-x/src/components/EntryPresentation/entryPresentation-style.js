import styled from 'styled-components'

export const Main = styled.div`
    width: 90%;
    height: 90%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-device-width: 1024px) {
        width: 96%;
    }

    @media screen and (min-device-width: 1444px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const Illustration = styled.img`
    flex: 1;
    width: 90%;
    margin: 0;

    @media screen and (min-device-width: 1024px) {
        width: 86%;
    }

    @media screen and (min-device-width: 1200px) {
        width: 70%;
    }

    @media screen and (min-device-width: 1444px) {
        max-width: 50%;
    }

    @media screen and (min-device-width: 2000px) {
        max-width: 40%;
    }
`

export const ActionContainer = styled.div`
    flex: .6;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    & > button {
        font-size: 1.08em;
        margin: 4% 0;

        :first-child {
            font-size: 1.2em;
            letter-spacing: 0.2em;
        }
    }

    @media screen and (min-device-width: 375px) {
        & > button {
            font-size: 1.26em;
            padding: 1rem;

            :first-child {
                font-size: 1.4em;
            }
        }
    }

    @media screen and (min-device-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
        width: 96%;

        & > button {
            width: 48%;

            &:last-child {
                font-size: 1.34em;
            }
        }
    }

    @media screen and (min-device-width: 1024px) {
        flex: .4;
        font-size: 1.4em;

        & > button {
            padding: .8em 0;
        }
    }

    @media screen and (min-device-width: 1444px) {
        flex-direction: column;
        height: 50%;

        & > button {
            width: 90%;
        }
    }
`