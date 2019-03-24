import React, { Component } from 'react';

import './HomeScreen.css';

class HomeScreen extends Component{

    state = {
        input: ""
    }

    searchItem= (e) =>{
        if( e.key === "Enter"){
            this.props.searchItemHandler(this.state.input)
            this.props.toggleMap();
        }
    }

    changeValueHandler = (event) =>{
        this.setState({
            input: event.target.value
        })
    }

    essentialItemHandler = (event) => {
        this.setState({
            input : event.target.innerText
        });

        this.props.searchItemHandler(event.target.innerText);
        this.props.toggleMap();
    }

    render(){
        
        return(
        <div className="MainContainer">
            <div className="Content"
                onKeyDown={this.searchItem}>
                <h1 className="Title">Title</h1>
                <input 
                    placeholder="Search Product" 
                    className="SearchBar"
                    onChange={this.changeValueHandler}/>
                <div className="EssentialTitle">Essential Items</div>
                <div className="EssentialItem" onClick={this.essentialItemHandler}>Water </div>
                <div className="EssentialItem" onClick={this.essentialItemHandler}>Batteries</div>
                <div className="EssentialItem" onClick={this.essentialItemHandler}>Canned Food</div>
                <div className="EssentialItem" onClick={this.essentialItemHandler}>Flashlight</div>
            </div>
        </div>
        
        );

    }

}

export default HomeScreen;