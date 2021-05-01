import styled from 'styled-components'

export const Main = styled.label`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f2f6;
    padding: 6px 10px;
    box-sizing: border-box;

    span {
        height: auto;
        width: auto;
        margin-right: 8px;
    }
`

export const TextAreaStyled = styled.textarea`
    width: 100%;
    background-color: #f1f2f6;
    border: none;
    padding: 10px;
    font-size: 1.2em;

    

    @media screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1em;
    }
`