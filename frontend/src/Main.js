import React, { Component } from 'react';
import MainScreen from './MainScreen/Mainscreen';
import App from './App';

class Main extends Component{

    state = {
        clicked: false
    }

    click = () =>{
        this.setState(prevState =>({
            clicked: !prevState.clicked
        }));
    }

    render(){
        return(
            <div>
                {this.state.clicked? <App /> : <MainScreen click={this.click}/>}

            </div>
        )
    }

}

export default Main;