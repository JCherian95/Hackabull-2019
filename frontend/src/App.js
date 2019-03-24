import React, { Component } from 'react';

import './App.css';
import Map from './Map/Map';
import HomeScreen from './HomeScreen/HomeScreen';
import MainScreen from './MainScreen/Mainscreen';

class App extends Component {

  state = {
    mapOpen: false,
    item: ""
  }

  searchItemHandler = (item) => {
      this.setState({
        item: item
      })
  }

  toggleMap = () =>{
    this.setState(prevState => ({
      mapOpen: !prevState.mapOpen
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.mapOpen ? 
        <Map toggleMap={this.toggleMap.bind(this)} item={this.state.item}/> :
        <HomeScreen 
          toggleMap={this.toggleMap.bind(this)}
          searchItemHandler={this.searchItemHandler.bind(this)}/>}
      </div>
    );
  }
}

export default App;
