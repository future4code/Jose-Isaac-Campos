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
        letter-spacing: 1px;
        line-height: 1.6em;
    }
`

export const Username = styled.p`
    font-weight: bold;
    font-size: 1.2em;
    text-transform: capitalize;
`

export const TextComment = styled.p`
    margin-top: 10px;
    color: #2f3542;
    font-weight: 300;
    font-size: 1em;
`