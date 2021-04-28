import React, { useState, useEffect } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { useParams } from 'react-router-dom'

export default function PostDetails() {
    const params = useParams()
    console.log(params.id)
    const data = useRequestData(`/posts/${params.id}`, [])
    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(data)
    }, [data])

    console.log(post)

    return (
        <div>
            
        </div>
    )
}
