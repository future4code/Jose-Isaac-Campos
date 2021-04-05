import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Mian/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
