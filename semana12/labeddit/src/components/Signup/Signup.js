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

import {ReactComponent as EmailIcon} from "../../icons/mail.svg";
import {ReactComponent as PasswordIcon} from "../../icons/password.svg";
import {ReactComponent as UserIcon} from "../../icons/user.svg";
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
              fillColor='#747d8c'
              icon={<UserIcon />}
              type="text"
              value={form.username}
              name='username'
              onChange={onChange}
              placeholder='User name'
              pattern={'[a-zA-Z0-9]{5,}$'}
            />
            <Input
              fillColor='#747d8c'
              icon={<EmailIcon />}
              type="email"
              value={form.email}
              name="email"
              onChange={onChange}
              placeholder="Email"
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
            />
            <Input
              fillColor='#747d8c'
              icon={<PasswordIcon />}
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
          <p>Os Eddits te esparam na sua jornada.</p>
          <p>Por favor, conecte-se novamente</p>
          <ButtonAction onClick={() => goToLoginPage(history)} >Signin</ButtonAction>
        </div>
      </SigninAppresetation>
    </Main>
  );
}
