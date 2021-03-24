import React from 'react';
import styled from 'styled-components'
import axios from 'axios';


import InputWithLabel from '../InputWithLabel/InputWithLabel'

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8%;
`

const Button = styled.button`
    text-transform: uppercase;
    padding: 10px;
    font-size: 1.4em;
    letter-spacing: 2px;
    border-radius: 8px;
    border-color: white;
    outline: none;
    margin-top: 4%;
    background-color: #0fbcf9;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #4bcffa;
        transform: scale(1.06);
    }
`

export default class NewUser extends React.Component {
    state = {
        inputName: '',
        inputEmail: ''
    }

    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail

        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'jose-isaac-cruz'
        }}
        )
        .then((response) => {
            alert('Usuário criado com sucesso!')
            this.setState({inputName: '', inputEmail: ''})
            this.props.getAllUsers()
        })
        .catch((error) => {
           if(error.response.data.message === 'User information are missing. Name and email are required.') {
               alert('Verifique se todos os campos estão preenchidos!')
           }
           
           if(error.response.data.message === 'There is an user with this name or this email') {
               alert('Usuário ou email já cadastro no sistema.')
           }

           if (error.response.data.message === 'Invalid email') {
               alert('Email inválido!')
           }
        })
    }

    handleInputName = (value) => {
        this.setState({ inputName: value })
    }

    handleInputEmail = (value) => {
        this.setState({ inputEmail: value })
    }

    render() {
        return (
            <DivPrincipal>
                <InputWithLabel 
                    id='name'
                    label='User name'
                    handleValue={this.handleInputName}
                    value={this.state.inputName}
                />
                <InputWithLabel 
                    id='email'
                    label='Your email'
                    handleValue={this.handleInputEmail}
                    value={this.state.inputEmail}
                />
                <Button onClick={this.createUser}>Send</Button>
            </DivPrincipal>
        )
    }
}