import React from 'react'
import { Main } from './NewPostStyle'

import Input from '../Input/Input'
import NewPostIcon from '../../icons/speech-bubble-with-ellipsis.svg' 
import {ReactComponent as SendIcon } from '../../icons/paper-plane.svg'

export default function NewPost() {
    return (
        <Main>
            <Input icon={NewPostIcon} placeholder='Compartilhe suas ideias com o mundo...'/>
            <SendIcon width='26px' fill='rgba(255, 255, 255, 1)' style={{padding: ' 0 10px', cursor: 'pointer'}}/>
        </Main>
    )
}
