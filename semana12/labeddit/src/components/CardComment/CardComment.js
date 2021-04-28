import React from 'react'
import { Main, Username, TextComment } from './CardCommentStyle'

export default function CardComment({comment}) {
    return (
        <Main>
            <Username>
                {comment.username}
            </Username>
            <TextComment>
                {comment.text}
            </TextComment>
        </Main>
    )
}
