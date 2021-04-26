import React from 'react'
import Logo from '../Logo/Logo'
import Input from '../Input/Input'

import { Main, SiginForm, SigninAppresetation, ButtonAction } from './LoginStyle'

import EmailIcon from '../../icons/mail.svg'
import PasswordIcon from '../../icons/password.svg'

export default function Login() {
    return (
        <Main>
            <Logo />
            <SiginForm>
                <div>
                    <h2>Sign in to LabEddit</h2>
                    <div>
                        <p>Entre com seus dados de acesso!</p>
                        <Input icon={EmailIcon} placeholder='Email'/>
                        <Input icon={PasswordIcon} placeholder='Password'/>
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
    )
}
