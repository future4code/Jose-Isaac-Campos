import React from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";
import { useHistory } from 'react-router-dom'

import {
  Main,
  SiginForm,
  SigninAppresetation,
  ButtonAction,
} from "./SignupStyle";

import EmailIcon from "../../icons/mail.svg";
import PasswordIcon from "../../icons/password.svg";
import UserIcon from "../../icons/user.svg";
import { signup } from "../../services/api";
import { goToLoginPage, goToFeedPage } from '../../router/coordinator'

export default function Signup() {
  const initialState = { username: "", email: "", password: "" };
  const [form, onChange] = useForm(initialState);
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    signup(body).then(() => goToFeedPage(history))
  };

  return (
    <Main>
      <Logo />
      <SiginForm onSubmit={onSubmit}>
        <div>
          <h2>Create Account</h2>
          <div>
            <p>Digite seus dados de cadastro!</p>
            <Input 
              icon={UserIcon}
              type="text"
              value={form.username}
              name='username'
              onChange={onChange}
              placeholder='User name'
              pattern={'[a-zA-Z0-9]{5,}$'}
            />
            <Input
              icon={EmailIcon}
              type="email"
              value={form.email}
              name="email"
              onChange={onChange}
              placeholder="Email"
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
            />
            <Input
              icon={PasswordIcon}
              type="password"
              value={form.password}
              name="password"
              onChange={onChange}
              placeholder="Password"
              pattern={"^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"}
            />
          </div>
          <ButtonAction>Signup</ButtonAction>
        </div>
      </SiginForm>
      <SigninAppresetation>
        <div>
          <h2>Bem vindo de volta!</h2>
          <p>Os Eddits tem espara na sua jornada. Por favor, conecte-se novamente</p>
          <ButtonAction onClick={() => goToLoginPage(history)} >Signin</ButtonAction>
        </div>
      </SigninAppresetation>
    </Main>
  );
}