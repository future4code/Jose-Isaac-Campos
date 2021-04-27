import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import CardPost from '../CardPost/CardPost'
import NewPost from '../NewPost/NewPost'

import { Main, SectionPost } from './FeedStyle'

export default function Feed() {
    const posts = useRequestData('/posts', [])

    console.log(posts)
    return (
        <Main>
            <NewPost />

            <SectionPost>
                { posts.length > 0 && posts.map(post => {
                    return <CardPost key={post.id} post={post}/>
                })}
            </SectionPost>
        </Main>
    )
}
