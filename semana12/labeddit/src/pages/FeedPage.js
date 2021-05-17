import React from 'react'
import ContainerRelative from '../components/ContainerRelative/ContainerRelative'
import Feed from '../components/Feed/Feed'
import Logo from '../components/Logo/Logo'

import { useProtectedPage } from '../hooks/useProtectedPage'

export default function FeedPage() {
    useProtectedPage()
    
    return (
        <ContainerRelative>
            <Logo />
            <Feed />
        </ContainerRelative>
    )
}
