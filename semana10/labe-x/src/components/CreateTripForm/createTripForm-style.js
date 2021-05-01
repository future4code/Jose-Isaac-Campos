import styled from 'styled-components'

export const Main = styled.main`
    width: 90%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 40%;
    margin-top: 1%;

    & > button {
        padding: 2%;
        font-size: 1.8em;
    }
` 

export const Input = styled.input`
    width: 100%;
    padding: 2.4%;
    margin: 2% 0;

    border-radius: 10px;
    font-size: 1.2em;
    box-sizing: border-box;
    border-width: 1px;
`

export const Select = styled.select`
    width: 100%;
    padding: 2.4%;
    margin: 1.4% 0;
    font-size: 1.1em;
    border-radius: 10px;  
    box-sizing: border-box;  
    background-color: #ffffff;
`

export const Option = styled.option`
    width: 100%;
    font-size: .96em;
`