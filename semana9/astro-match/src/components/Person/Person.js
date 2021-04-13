import React from 'react'

import Heart from '../../icons/coracao.png'
import Cancel from '../../icons/cancel.png'

import {DivMain, Photo, InfoProfile, ContainerBottons, Discard, Match, Icon} from './style'
import { choosePerson } from '../../services/api'

export default function Person(props) {
    const {id, name, photo, bio, age} = props.profile

    const setMatche = async (id, choice) => {
        await choosePerson(id, choice)
        props.getProfile()
    }

    return (
        <DivMain>
            <div>
                <Photo src={photo} alt={name} />
                <ContainerBottons>
                    <Discard onClick={() => setMatche(id, false)}>
                        <Icon src={Cancel}/>
                    </Discard>
                    <Match onClick={() => setMatche(id,true)}>
                        <Icon src={Heart}/>
                    </Match>
                </ContainerBottons>
                <InfoProfile>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{bio}</p>
                </InfoProfile>
            </div>
        </DivMain>
    )
}
