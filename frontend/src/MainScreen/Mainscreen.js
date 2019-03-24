import React, { Component } from 'react';
import LogoImg from './logo.jpg';
import './MainScreen.css';

class MainScreen extends Component {



    render() {
        return (
          <div className="Main">
            <header className="main-head">
              <img src={LogoImg} className="App-logo" alt="Logo" />
              <br></br><button type="button" className="btn btn-primary" onClick={this.props.click}>Get Started</button>
            </header>

          </div>
        );
      }
    
      onClick(ev) {
          
      }
}

export default MainScreen;