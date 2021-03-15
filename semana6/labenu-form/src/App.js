import './App.css';
import Form from './components/Form/Form';
import React from 'react'
import Thanks from './components/Thanks/Thanks';

class App extends React.Component {
  state = {
    send: false
  }

  isSend = () => {
    this.setState({send: !this.state.send})
  }

  render() {
    return (
      <div className="App">
        {this.state.send || <Form isSend={this.isSend}/>}
        {this.state.send && <Thanks />}
      </div>
    );
  }
}

export default App;
