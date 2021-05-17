import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    background-color: rgba(112, 161, 255, .2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 14px;
    margin: 20px 0;
    box-sizing: border-box;

    p {
        line-height: 1.6em;
    }
`

export const Username = styled.p`
    font-weight: bold;
    font-size: 1.2em;
    text-transform: capitalize;
    letter-spacing: 1px;
`

export const TextComment = styled.p`
    margin-top: 10px;
    color: #2f3542;
    font-weight: 300;
    font-size: 1em;
    letter-spacing: 1px;

    span {
        font-style: italic;
    }
`

export const ContainerVoting = styled.div`
    margin-top: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DateFormated = styled.p`
    font-weight: 300;
    font-size: .96em;
    letter-spacing: 2px;
`