import React, { Component } from 'react'
import './SecaoEnvioDeMensagem.css'

export class SecaoEnvioDeMensagem extends Component {
    state = {
        mensagem: ''
    }

    handleMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    handleEnviar = () => {
        console.log(`Post compartilhado no ${this.props.redeEscolhida} com a mensagem: "${this.state.mensagem}"`)
    }
    
    render() {
        return (
            <div className="container-enviar">
                <input onChange={this.handleMensagem} value={this.state.mensagem} />
                <button onClick={this.handleEnviar}>
                    <img src="https://www.flaticon.com/svg/vstatic/svg/786/786205.svg?token=exp=1615403456~hmac=99a43bf71f5b41f598f80e3fe70e54eb" alt="enviar" />
                    Enviar
                </button>
            </div>
        )
    }
}
