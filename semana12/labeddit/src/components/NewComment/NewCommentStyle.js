import styled from 'styled-components'

export const Main = styled.form`
    width: 100%;
    display: flex;
    padding: 0 10px 0 0;
    border-radius: 10px;
    box-sizing: border-box;

    background: rgb(112,161,255);
    background: linear-gradient(90deg, rgba(112,161,255,1) 6%, rgba(30,14,255,1) 60%, rgba(102,147,232,) 100%);


    label, input { 
        background: rgb(112,161,255);
        background: linear-gradient(90deg, rgba(112,161,255,1) 6%, rgba(30,14,255,1) 60%, rgba(102,147,232,) 100%);
        border-radius: 8px; 
        outline: none;
        color: white;

        ::placeholder {
            color: rgba(255,255,255, .9);
        }
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`