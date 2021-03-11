import React from 'react';
import {IconeComOnClick} from '../IconeComOnClick/IconeComOnClick'
import './SecaoCompartilharPost.css'
import {SecaoEnvioDeMensagem} from '../SecaoEnvioDeMensagem/SecaoEnvioDeMensagem'

export class SecaoCompartilharPost extends React.Component {
    state = {
        redeEscolhida: ''
    }

    onClickInstagram = () => {
        this.setState({redeEscolhida: 'Instagram'})
    }
    onClickFacebook = () => {
        this.setState({redeEscolhida: 'Facebook'})
    }
    onClickTwitter = () => {
        this.setState({redeEscolhida: 'Twitter'})
    }

    render() {

        let componenteMensagem;

        if (this.state.redeEscolhida !== '') {
            componenteMensagem = <SecaoEnvioDeMensagem redeEscolhida={this.state.redeEscolhida}/>
        }

        return (
            <div id="container-compartilhamento">
                <p>Selecione uma das redes sociais abaixo:</p>
                <div className="container-redes-sociais">
                    <div onClick={this.onClickInstagram}>
                        <IconeComOnClick 
                            icone='http://mairacuryteam.com.br/wp-content/uploads/2019/05/logo-instagram-png-fundo-transparente13-1-768x768.png'
                            onClickIcone={this.onClickInstagram}
                        />
                        <span>Instagram</span>
                    </div>
                    <div onClick={this.onClickFacebook}>
                        <IconeComOnClick 
                            icone='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2-1.png'
                            onClickIcone={this.onClickFacebook}
                        />
                        <span>Facebook</span>
                    </div>
                    <div onClick={this.onClickTwitter}>
                        <IconeComOnClick 
                            icone='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png'
                            onClickIcone={this.onClickTwitter}
                        />
                        <span>Twitter</span>
                    </div>
                </div>
                {componenteMensagem}
            </div>
        )
    }
}