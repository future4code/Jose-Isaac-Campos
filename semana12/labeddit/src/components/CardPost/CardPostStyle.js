import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    background-color: rgba(52,138,219,.2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 14px;
    margin: 20px 0;
    box-sizing: border-box;
    transition: all 0.6s;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        margin: 4px 0 14px;
    }

    div {
        cursor: pointer;
    }

    :hover {
        transition: all 0.4s;
        box-shadow: 2px 2px 12px rgba(30,14,255,.2);
        backface-visibility: hidden;
    }

    p {
        letter-spacing: 1px;
        line-height: 1.6em;
    }
`

export const Username = styled.p`
    font-weight: bold;
    font-size: 1.4em;
    text-transform: capitalize;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
        font-weight: 300;
        font-size: .78em;
        color: #2f3542;
    }
`

export const Title = styled.p`
    font-weight: bold;
    margin: 8px 0;
`

export const TextPost = styled.p`
    margin-top: 10px;
    color: #2f3542;
    font-weight: 300;
    font-size: 1.1em;
`