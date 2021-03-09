import React from 'react'
import './CardPequeno.css'

const CardPequeno = (props) => {
    return (
        <div className='endereco-container'>
            <p>{props.texto}</p>
        </div>
    )
}

export default CardPequeno