import axios from "axios";
import React from "react";
import styled from "styled-components";
import { baseUrl, headers } from "../../parameters";

import usersListIcon from "../../icons/list.png";

const DivPrincipal = styled.div`
  & > div > div {
    &:first-child {
        margin-top: 14%;
    }

    text-transform: capitalize;
    margin: 8% 2%;
    letter-spacing: 1px;
    padding: 2%;
    border-radius: 6px;
    font-size: 1.2em;

    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.26);
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  width: 100%;
  font-size: 1.4em;
  letter-spacing: 2px;
  border-radius: 8px;
  border-color: white;
  outline: none;
  margin-top: 4%;
  background-color: #0fbcf9;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #ff5e57;
    transform: scale(1.06);
  }
`;

const ButtonAcion = styled.div`
  display: flex;
  align-items: center;
  margin: 6% 4%;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    margin-right: 0.6%;
  }

  & > img {
    width: 20px;
    margin-right: 6px;
  }

  & > span {
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 2px;
    color: #0fbcf9;
    font-weight: 700;
  }
`;

export default class UserDetail extends React.Component {
  state = {
    user: {},
  };

  componentDidMount = () => {
    this.getUserById(this.props.userId);
  };

  getUserById = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(`${baseUrl}/${id}`, headers);
      this.setState({ user: response.data });
    } catch (error) {
      console.log(error.response.data.message);

      if (error.response.data.message === "User not found.") {
        alert("Usuário não encontrado!");
        this.props.back();
      }
    }
  };

  deleteUser = async () => {
      await this.props.deleteUser(this.state.user.id)
      this.props.back();
  }

  render() {
    return (
      <DivPrincipal>
        <ButtonAcion onClick={this.props.back}>
          <img
            src={usersListIcon}
            alt=""
          />
          <span>users list</span>
        </ButtonAcion>
        <div>
            <div>{this.state.user.name}</div>
            <div>{this.state.user.email}</div>
        </div>
        <Button
          onClick={
            this.deleteUser
          }
        >
          deletar
        </Button>
      </DivPrincipal>
    );
  }
}
