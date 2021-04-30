import styled from 'styled-components'

export const Main = styled.form`
    width: 100%;
    display: flex;
    padding: 0 18px 0 0;
    border-radius: 10px;
    box-sizing: border-box;

    background: rgba(46,121,193,.98);
    background: linear-gradient(79deg, #1e90ff  12%, rgba(52,138,219,.98) 61%, rgba(46,121,193,.98) 80%);


    label, input { 
        background: rgb(30,190,172);
        background: linear-gradient(79deg, #1e90ff  12%, rgba(52,138,219,.98) 61%, rgba(46,121,193,.98) 100%);
        border-radius: 8px; 
        outline: none;
        color: white;

        ::placeholder {
            color: rgba(255,255,255, .9);
        }
    }
`

export const ContainerInputs = styled.div`
    width: 100%;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`


