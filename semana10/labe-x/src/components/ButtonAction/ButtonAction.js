import React from 'react'
import {Button} from './buttonAction-style'

export default function ButtonAction({children, onClick}) {
    return (
        <Button onClick={onClick} >{children}</Button>
    )
}
