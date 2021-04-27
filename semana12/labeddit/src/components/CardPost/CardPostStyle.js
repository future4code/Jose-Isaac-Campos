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
        line-height: 1.4em;
    }
`

export const Username = styled.p`
    font-weight: bold;
    font-size: 1.3em;
    text-transform: capitalize;
`

export const TextPost = styled.p`
    margin-top: 10px;
`