import React from 'react'
import './CardPequeno.css'

const CardPequeno = (props) => {
    return (
        <div className="endereco-container">
            <img src={props.img} />
            <p>{props.texto}</p>
        </div>
    )
}

export default CardPequeno