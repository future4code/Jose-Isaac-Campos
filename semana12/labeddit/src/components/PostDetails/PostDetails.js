import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostsDetails } from '../../services/api'
import CardComment from '../CardComment/CardComment'
import CardPost from '../CardPost/CardPost'
import { Main, SectionComments, SectionPostInfo } from './PostDetailsStyle'

export default function PostDetails() {
    const params = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        getPostsDetails(params.id).then(response => {
            setPost(response.data.post)
        })
    }, [params.id])

    console.log(post)

    return (
        <Main>
            <SectionPostInfo>
                <CardPost post={post} />
            </SectionPostInfo>

            <SectionComments>
                {post.comments.length > 0 && post.comments.map(comment => {
                    return <CardComment comment={comment} />
                })}
            </SectionComments>
        </Main>
    )
}
