import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeComOnClick} from '../IconeComOnClick/IconeComOnClick'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcacaoPostPreto from '../../img/bookmark-black.svg'
import iconeMarcacaoPostBranco from '../../img/bookmark_border-black.svg'
import iconeCompartilharPreto from '../../img/share-black.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilharPost} from '../SecaoCompartilharPost/SecaoCompartilharPost'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if (this.state.curtido) {
      this.setState({curtido: false, numeroCurtidas: this.state.numeroCurtidas - 1})
    } else {
      this.setState({curtido: true, numeroCurtidas: this.state.numeroCurtidas + 1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    this.setState({compartilhando: !this.state.compartilhando})
  }

  onClickMarcacao = () => {
    this.setState({marcado: !this.state.marcado})
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida,
        iconeMarcacao

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if (this.state.marcado) {
      iconeMarcacao = iconeMarcacaoPostPreto
    } else {
      iconeMarcacao = iconeMarcacaoPostBranco
    }

    let componenteComentario,
        componenteCompartilhar

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilharPost />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComOnClick 
          icone={iconeCompartilharPreto}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComOnClick 
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />
      </div>
      {componenteCompartilhar}
      {componenteComentario}
    </div>
  }
}

export default Post