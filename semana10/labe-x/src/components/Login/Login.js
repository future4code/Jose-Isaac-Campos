import React from "react"
import {useInput} from '../../hooks/useInput'

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
    const [email, handleEmail] = useInput()    
    const [password, handlePassword] = useInput()

    
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
                        <ButtonAction>Entrar</ButtonAction>
                    </FormContent>
                </Form>
            </Content>
        </Main>
    )
}
