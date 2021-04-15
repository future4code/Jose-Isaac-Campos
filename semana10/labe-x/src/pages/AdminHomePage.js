import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
export default function AdminHomePage() {
    useProtectedPage()
    return (
        <div>
            <p>AdminHomePage</p>
        </div>
    )
}
