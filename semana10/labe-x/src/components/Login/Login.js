import React from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { apiSendData } from "../../services/api"
import { goToAdminHomePage } from "../../router/coordinator"

import {
  Main,
  Illustration,
  Content,
  Form,
  FormContent,
  Title,
  Input,
  ContainerInput,
} from "./login-style"
import ButtonAction from "../ButtonAction/ButtonAction"
import IllustrationLogin from "../../illustrations/undraw_mobile_login_ikmv.svg"

export default function Login() {
  const history = useHistory()
  const [form, onChange] = useForm({ email: "", password: "" })

  const login = () => {
    const body = {
      email: form.email,
      password: form.password,
    }

    apiSendData("/login", body).then((access) => {
      if (access.success) {
        window.localStorage.setItem("token", access.token)
        goToAdminHomePage(history)
      } else {
        alert(access.error)
      }
    })
  }

  const handleForm = (event) => {
    event.preventDefault()
    login()
  }

  return (
    <Main>
      <Content>
        <Illustration src={IllustrationLogin} alt="login" />
        <Form onSubmit={handleForm}>
          <FormContent>
            <Title>Login</Title>
            <ContainerInput>
              <Input
                pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
                type='email'
                required
                value={form.email}
                name="email"
                onChange={onChange}
                placeholder="email"
              />
              <Input
                pattern={"^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"}
                type='password'
                required
                onChange={onChange}
                value={form.password}
                name="password"
                placeholder="password"
              />
            </ContainerInput>
            <ButtonAction>Entrar</ButtonAction>
          </FormContent>
        </Form>
      </Content>
    </Main>
  )
}
