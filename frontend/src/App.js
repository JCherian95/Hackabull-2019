import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" className="btn btn-primary" onClick={this.onClick}>Send GET api</button>
        </header>
      </div>
    );
  }

  onClick(ev) {
    console.log("Sending a GET API Call !!!");
    axios.get('http://127.0.0.1:8000/api/?format=json')
    .then(res => {
      console.log(res);
    }).then(response => {
      console.log(JSON.stringify(response));
    })    
  }
}



export default App;
