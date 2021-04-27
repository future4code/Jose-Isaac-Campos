import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    background-color: #f1f2f6;
`

export default function ContainerRelative({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
