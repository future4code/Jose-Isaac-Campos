import styled from 'styled-components'

export const Main = styled.main`
    width: 90%;
    margin: 0 auto;
`

export const ContainerCardInfo = styled.section`
    width: 100%;
    margin-top: 2%;
`

export const TitleSection = styled.h3`
    width: 100%;
    text-transform: uppercase;
    color: #34ACE0;
    padding-bottom: .1%;
    font-size: 1.8em;

    border-bottom: 3px solid #485460;
    border-radius: 4px;
`

export const CardInfo = styled.div`
    width: 28%;
    padding: 6px 16px;
    margin-top: 1%;

    background: rgba(72, 84, 96, 0.1);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & p {
        font-size: 1.2em;
        margin: 1% 0;
        line-height: 1.4em;

        & > span {
            margin-right: 2%;
            font-weight: 500;
        }
    }
`

export const ListCandidates = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ContainerButtonAction = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 48%;
        padding: 2% 0;
        letter-spacing: 4px;
        border-radius: 6px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const Icon = styled.img`
    width: 18px;
`

