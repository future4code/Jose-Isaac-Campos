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
} from "./SigninStyle";

import {ReactComponent as EmailIcon} from "../../icons/mail.svg";
import {ReactComponent as PasswordIcon} from "../../icons/password.svg";
import { login } from "../../services/api";
import { goToSignupPage, goToFeedPage } from '../../router/coordinator'

export default function Login() {
  const initialState = { email: "", password: "" };
  const [form, onChange] = useForm(initialState);
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    login(body).then(() => goToFeedPage(history))
  };

  return (
    <Main>
      <Logo />
      <SiginForm onSubmit={onSubmit}>
        <div>
          <h2>Sign in to LabEddit</h2>
          <div>
            <p>Entre com seus dados de acesso!</p>
            <Input
              fillColor='#747d8c'
              icon={<EmailIcon />}
              type="email"
              placeholderalue={form.email}
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
          <ButtonAction>Signin</ButtonAction>
        </div>
      </SiginForm>
      <SigninAppresetation>
        <div>
          <h2>Olá, user!</h2>
          <p>Com um pequeno cadastro você já inicia sua jornada no LabEddit</p>
          <ButtonAction onClick={() => {goToSignupPage(history)}}>Signup</ButtonAction>
        </div>
      </SigninAppresetation>
    </Main>
  );
}
