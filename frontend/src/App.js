import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      return (
      <div className="mx-auto text-center">
        <button type="button" onClick={this.componentDidMount} className="btn btn-primary">Send GET</button>
      </div>
      );
  }
  
  componentDidMount() {
    console.log("Sending a GET API Call !!!");
    axios.get('http://localhost:8000/sample')
    .then(response => {
      console.log(response)
      this.setState({ideas: response.data})
    }).catch(error => console.log(error))
  }
  
}

export default App;
