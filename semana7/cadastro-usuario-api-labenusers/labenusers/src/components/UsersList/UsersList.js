import axios from "axios";
import React from "react";
import styled from "styled-components";
import { baseUrl, headers } from "../../parameters";

import removeIcon from "../../icons/remove.png";
import UserDetails from "../UserDetails/UserDetails";

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
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.26);

    & > img {
      width: 24px;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default class UsersList extends React.Component {
    state = {
        displayingUserDetails: false,
        userIdInDetail: {}
    }

  deleteUser = async (id) => {
    if (window.confirm('Deseja realmente deleter esse usuário?')) {
        try {
            await axios.delete(`${baseUrl}/${id}`, headers)
            
            this.props.getAllUsers();
            alert("Usuário deletado com sucesso");
        } catch (error) {
            if (error.response.data.message === "User not found.") {
              alert("Usuário não encontrado");
            }
            console.log(error.response.data.message);
        }
    }
  };

  isDisplayingUserDetails = (id) => {
    this.setState(
        {
            displayingUserDetails: !this.state.displayingUserDetails,
            userIdInDetail: id
        })
  }

  render() {
    console.log(this.state.displayingUserDetails)
    const users = this.props.users.map((user) => {
      return (
        <li key={user.id}
            onClick={() => this.isDisplayingUserDetails(user.id)}
        >
          {user.name}
          <img
            src={removeIcon}
            alt=""
            onClick={() => {
              this.deleteUser(user.id);
            }}
          />
        </li>
      );
    });
    console.log(this.state.userIdInDetail)
    return <UlPrincipal>
        { this.state.displayingUserDetails ? 
            <UserDetails 
            userId={this.state.userIdInDetail} 
            back={this.isDisplayingUserDetails}
            deleteUser={this.deleteUser}
            />
            :
            users
        }
    </UlPrincipal>;
  }
}
