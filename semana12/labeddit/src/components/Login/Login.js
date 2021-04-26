import React from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";

import {
  Main,
  SiginForm,
  SigninAppresetation,
  ButtonAction,
} from "./LoginStyle";

import EmailIcon from "../../icons/mail.svg";
import PasswordIcon from "../../icons/password.svg";

export default function Login() {
  const initialState = { email: "", password: "" };
  const [form, onChange, resetForm] = useForm(initialState);

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    console.log(body);
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
              icon={EmailIcon}
              type="email"
              placeholderalue={form.email}
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
          <ButtonAction>Sign in</ButtonAction>
        </div>
      </SiginForm>
      <SigninAppresetation>
        <div>
          <h2>Olá, user!</h2>
          <p>Com um pequeno cadastro você já inicia sua jornada no LabEddit</p>
          <ButtonAction>Signup</ButtonAction>
        </div>
      </SigninAppresetation>
    </Main>
  );
}
