import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'


const SecaoCriarPost = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: space-around;
  margin: 10px 0;
  width: 302px;
`

const Botao = styled.button`
  flex: 1;
  background-color: gray;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
`

const FormNovoPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  width: 100%;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 4px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'José',
        fotoUsuario: 'https://picsum.photos/60/10',
        fotoPost: 'https://picsum.photos/202/150/'
      },
      {
        nomeUsuario: 'Isaac',
        fotoUsuario: 'https://picsum.photos/10/60',
        fotoPost: 'https://picsum.photos/201/150'
      }
    ],
    criandoPost: false,
    inputNomeUsuario: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  }

  handleNomeUsuario = (event) => {
    this.setState({inputNomeUsuario: event.target.value})
  }

  handleFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }

  handleFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }

  onClickNovoPost = () => {
    this.setState({criandoPost: true})
  }

  adicionarPost = () => {
    const novoPost = { 
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const novaListaDePosts = [novoPost, ...this.state.posts]
    this.setState({posts: novaListaDePosts, criandoPost: false})
  }

  render() {
    let content

    if (!this.state.criandoPost) {
      content = <Botao onClick={this.onClickNovoPost}>+</Botao>
    } else {
      content = <FormNovoPost>
        <Input value={this.state.inputNomeUsuario} onChange={this.handleNomeUsuario} placeholder='Nome do usuário' />
        <Input value={this.state.inputFotoPost} onChange={this.handleFotoPost} placeholder='Url da image do post' />
        <Input value={this.state.inputFotoUsuario} onChange={this.handleFotoUsuario} placeholder='Url da image do perfil' />
        <Botao onClick={this.adicionarPost}>Adicionar</Botao>
      </FormNovoPost>
    }

    const postsComponent = this.state.posts.map((post, index) => {
      return <Post key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    })

    return (
      <div className={'app-container'}>
        <SecaoCriarPost>{content}</SecaoCriarPost>
        {postsComponent}
      </div>
    );
  }
}

export default App;
