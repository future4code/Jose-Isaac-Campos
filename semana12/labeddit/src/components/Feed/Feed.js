import React, { useState, useEffect } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import CardPost from '../CardPost/CardPost'
import NewPost from '../NewPost/NewPost'

import { Main, SectionPost } from './FeedStyle'

export default function Feed() {
    const data = useRequestData('/posts', [])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(data)
    }, [data])

    console.log(posts)

    const setNewPost = (newPost) => {
        setPosts([newPost, ...posts])
    }
    return (
        <Main>
            <NewPost setPosts={setNewPost}/>

            <SectionPost>
                { posts.length > 0 && posts.map(post => {
                    return <CardPost key={post.id} post={post}/>
                })}
            </SectionPost>
        </Main>
    )
}
