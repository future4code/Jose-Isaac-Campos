import styled from 'styled-components'
import Objects3d from '../../img/3d-object.png'

export const Main = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(30,190,172);
    background: linear-gradient(79deg, rgba(30,190,172,.99) 12%, rgba(52,138,219,.98) 61%, rgba(46,121,193,.98) 100%), url(${Objects3d});

    position: relative;
    display: flex;
`

export const SiginForm = styled.form`
    flex: 2;
    background-color: white;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        height: 80%;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        letter-spacing: 2px;
        color: #747d8c;

        div { 
            width: 100%;
            height: auto;

            p { margin: 2% 0;}

            label {margin: 2% 0;}
        }

        h2 {
            color: rgb(30,190,172);
            font-size: 2.6em;
            font-weight: 600;
            letter-spacing: 6px;
        }

        button {
            background-color: rgb(30,190,172);
            width: 70%;
            font-size: 1.4em;
        }
    }
`

export const SigninAppresetation = styled.div`
    flex: 1;
    height: 100%;
    color: white;
    letter-spacing: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        height: 36%;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        h2 { 
            font-size: 3.4em;
            letter-spacing: 10px;
            font-weight: 600;
        }

        p {
            font-size: 1.2em;
            text-align: center;
            line-height: 1.4em;
        }

        button {
            width: 70%;
            border: 2px solid white;
        }
    }
`

export const ButtonAction = styled.button`
    padding: 14px;
    color: white;
    background-color: transparent;
    border: none;
    border-radius: 30px;
    font-size: 1.2em;
    letter-spacing: 4px;
    text-transform: uppercase;
    cursor: pointer;
`