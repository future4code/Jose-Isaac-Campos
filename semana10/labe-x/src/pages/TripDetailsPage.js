import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
export default function TripDetailsPage() {
    useProtectedPage()
    return (
        <div>
            <p>TripDetailsPage</p>
        </div>
    )
}
