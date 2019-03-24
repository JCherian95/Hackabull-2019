import React, { Component } from 'react';
import LogoImg from './logo.jpg';
import './MainScreen.css';

class MainScreen extends Component {



    render() {
        return (
          <div className="Main">
            <header className="main-head">
                <img src={LogoImg} className="App-logo" alt="Logo" />
                <h1 className="text-primary"><i>Be Prepared. Get Stocked.</i></h1>
                <button type="button" className="btn btn-primary text-white" style={{ fontSize: 25 }}onClick={this.props.click}><b>Get Started</b></button>
            </header>

          </div>
        );
      }
    
      onClick(ev) {
          
      }
}

export default MainScreen;