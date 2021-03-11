import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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
    ]
  }

  render() {
    const postsComponent = this.state.posts.map((post, index) => {
      return <Post key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    })

    return (
      <div className={'app-container'}>
        {postsComponent}
      </div>
    );
  }
}

export default App;
