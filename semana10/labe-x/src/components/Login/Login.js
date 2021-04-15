import React from "react"
import { useHistory } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import { apiSendData } from '../../services/api'
import { goToAdminHomePage } from '../../router/coordinator'

import {
    Main,
    Illustration,
    Content,
    Form,
    FormContent,
    Title,
    Input,
    ContainerInput
} from "./login-style"
import ButtonAction from '../ButtonAction/ButtonAction'
import IllustrationLogin from "../../illustrations/undraw_mobile_login_ikmv.svg"

export default function Login() {
    const history = useHistory()
    const [email, handleEmail] = useInput()    
    const [password, handlePassword] = useInput()

    const login = () => {
        const body = {
            email,
            password
        }

        apiSendData('/login', body)
            .then(access => {
                if (access.success) {
                    window.localStorage.setItem('token', access.token)
                    goToAdminHomePage(history)
                } else {
                    alert(access.error)
                }
            })
    }

    return (
        <Main>
            <Content>
                <Illustration src={IllustrationLogin} alt="login" />
                <Form>
                    <FormContent>
                        <Title>Login</Title>
                        <ContainerInput>
                            <Input value={email} onChange={handleEmail} placeholder="email"/>
                            <Input value={password} onChange={handlePassword} placeholder="password"/>
                        </ContainerInput>
                        <ButtonAction onClick={login}>Entrar</ButtonAction>
                    </FormContent>
                </Form>
            </Content>
        </Main>
    )
}
