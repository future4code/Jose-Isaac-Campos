import React, { useState, useEffect, useCallback } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import CardPost from '../CardPost/CardPost'
import NewPost from '../NewPost/NewPost'
import {getPosts} from '../../services/api'

import { Main, SectionPost } from './FeedStyle'

export default function Feed() {
    const data = useRequestData('/posts', [])
    const [posts, setPosts] = useState([])

    const sortPosts = useCallback((posts) => {
        const postsSorted = posts
          .sort((itemA, itemB) => {
            return itemB.createdAt - itemA.createdAt;
           })
          .sort((itemA, itemB) => {
            return itemB.commentsCount - itemA.commentsCount;
          })
          .sort((itemA, itemB) => {
            return itemB.votesCount - itemA.votesCount;
          });
        setPosts(postsSorted);
    }, [])

    useEffect(() => {
        sortPosts(data)
    }, [data, sortPosts])

    const updatePosts = () => {
        getPosts().then(response => {
            sortPosts(response.data.posts)
        })
    }

    console.log(posts)

    const setNewPost = (newPost) => {
        setPosts([newPost, ...posts])
        updatePosts()
    }
    return (
        <Main>
            <NewPost setNewPost={setNewPost}/>

            <SectionPost>
                { posts.length > 0 && posts.map(post => {
                    return <CardPost key={post.id} post={post}/>
                })}
            </SectionPost>
        </Main>
    )
}
