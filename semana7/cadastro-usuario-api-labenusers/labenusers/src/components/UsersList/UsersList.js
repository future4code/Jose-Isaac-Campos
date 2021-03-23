import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

import removeIcon from '../../icons/remove.png'

const UlPrincipal = styled.ul`
    list-style: none;
    margin-top: 8% 0;

    & > li {
        text-transform: capitalize;
        margin: 8% 2%;
        letter-spacing: 1px;
        padding: 2%;
        border-radius: 6px;
        font-size: 1.2em;

        display: flex;
        justify-content: space-between;
        align-items: center;

        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.26);

        & > img {
            width: 24px;
            cursor: pointer;

            &:hover {
                transform: scale(1.2)
            }
        }
    }
`

export default class UsersList extends React.Component {

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        console.log(url)
        axios.delete(url, {
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'jose-isaac-cruz'
            }
        })
        .then((response) => {
            this.props.getAllUsers()
            alert('Usuário deletado com sucesso')
        })
        .catch((error) => {
            if (error.response.data.message === 'User not found.') {
                alert('Usuário não encontrado')
            }
            console.log(error.response.data.message)
        })
    }

    render() {
        const users = this.props.users.map((user) => {
            return <li key={user.id}>
                {user.name}
                <img 
                    src={removeIcon} 
                    alt='' 
                    onClick={() => {this.deleteUser(user.id)}}
                />
                </li>
        })
        return (
            <UlPrincipal>
                {users}
            </UlPrincipal>
        )
    }
}