import axios from "axios";
import React from "react";
import styled from 'styled-components'
import NewUser from "../NewUser/NewUser";
import UsersList from "../UsersList/UsersList";
import {baseUrl, headers} from '../../parameters'

import addIcon from '../../icons/add.png'
import usersListIcon from '../../icons/list.png'

const DivPrincipal = styled.div`
    width: 24%;
    height: 90%;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, .36);
    padding: 10px;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
`

const Titile = styled.h1`
    color: #485460;
    text-align: center;
    margin: 2% 0;
    letter-spacing: 6px;
    font-weight: 500;
    
    & > span {
        font-weight: 600;
        color: #ffa801;
    }
`

const ButtonAddUser = styled.div`
    display: flex;
    align-items: center;
    margin: 6% 4%;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        margin-right: .6%;
    }


    & > img {
        width: 20px;
        margin-right: 6px;
    }

    & > span {
        text-transform: uppercase;
        font-size: .9em;
        letter-spacing: 2px;
        color: #0fbcf9;
        font-weight: 700;
    }
`

export default class CardPrincipal extends React.Component {
    state = {
        userList: [],
        creatingNewUser: false,
    }

    handleCreatingNewUser = () => {
        this.setState({creatingNewUser: !this.state.creatingNewUser})
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(baseUrl, headers)
        .then(response => {
            this.setState({userList: response.data})
        })
        .catch(err => {
            console.error(err)
        })
    }

    deleteUserLocal = (id) => {
        const userList = this.state.userList.filter(user => {
            return user.id !== id
        })

        this.setState({userList: userList})
    }

    render() {
        return (
            <DivPrincipal>
                <Titile><span>L</span>aben<span>U</span>sers</Titile>
                <ButtonAddUser onClick={this.handleCreatingNewUser}>
                    <img src={this.state.creatingNewUser ? addIcon : usersListIcon } alt="" />
                    <span>
                        {
                            !this.state.creatingNewUser ?
                            'new user'
                            :
                            'users list'
                        }
                    </span>
                </ButtonAddUser>

                {
                    this.state.creatingNewUser ? 
                    <NewUser 
                        getAllUsers={this.getAllUsers}
                    />
                    :
                    <UsersList 
                        users={this.state.userList} 
                        getAllUsers={this.getAllUsers}
                    />
                }
                
            </DivPrincipal>
        )
    }
}