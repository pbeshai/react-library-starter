import React, { Component } from 'react';

import { MyComponent, randomColors } from 'react-library-starter';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: randomColors(15),
    };

    this.changeRandomColors = this.changeRandomColors.bind(this);
  }

  changeRandomColors() {
    this.setState({
      colors: randomColors((Math.random() * 30) + 10),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <MyComponent defaultColor="#41b6c4" />
          <div>
            <button onClick={this.changeRandomColors}>Change Random Colors</button>
          </div>
          <div className="random-colors">
            {this.state.colors.map((color, i) => <div key={i} style={{ background: color }} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
