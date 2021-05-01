import styled from 'styled-components'

export const Main = styled.main`
    width: 90%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Illustration = styled.img`
    flex: .8;
    width: 40vw;
`

export const Form = styled.form`
    flex: 1;
`

export const FormContent = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & > button {
        font-size: 1.6em;
        letter-spacing: .4em;
    }
` 

export const Title = styled.h1`
    width: 100%;
    border: 2px solid #485460;
    border-left: 0;
    border-right: 0; 
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .4em;

    padding: 2% 0;
    color: #34ACE0;
`

export const Input = styled.input`
    width: 100%;
    padding: 3%;
    margin: 6% 0;

    border-radius: 10px;
    font-size: 1.2em;
    box-sizing: border-box;
`

export const ContainerInput = styled.div`
    width: 100%;
`