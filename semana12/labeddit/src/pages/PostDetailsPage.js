import React from 'react'
import ContainerRelative from '../components/ContainerRelative/ContainerRelative'
import Logo from '../components/Logo/Logo'
import PostDetails from '../components/PostDetails/PostDetails'
import { useProtectedPage } from '../hooks/useProtectedPage'

export default function PostDetailsPage() {
    useProtectedPage()

    return (
        <ContainerRelative>
            <Logo />
            <PostDetails />
        </ContainerRelative>
    )
}
