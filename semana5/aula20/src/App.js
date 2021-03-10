import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'José'}
          fotoUsuario={'https://picsum.photos/60/10'}
          fotoPost={'https://picsum.photos/200/150/'}
        />
        <Post
          nomeUsuario={'Isaac'}
          fotoUsuario={'https://picsum.photos/10/60'}
          fotoPost={'https://picsum.photos/201/150/'}
        />
      </div>
    );
  }
}

export default App;
