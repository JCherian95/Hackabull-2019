import React, { Component } from 'react';
import axios from 'axios';

import GoogleMapReact from 'google-map-react';
import './Map.css';
import { data } from '../Data';

const Marker = ({units}) => <span className="Marker">Units:{units}</span>;

class Map extends Component {

    state = {
        zoom : 10,
        lat: 50,
        lng: 50,
        itemsLoaded: []
    }

    componentDidMount(){
        axios
            .post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAJKRevH5FV5gSg6_4DJ5bNd9mtizOcOvo")
            .then(response => {
                this.setState({ 
                    lat: response.data.location.lat,
                    lng : response.data.location.lng
                });
            })
            .catch(error => {
                console.log(error);
            })

            axios
            .get(`https://api.edamam.com/api/food-database/parser?ingr=${this.props.item}&app_id=0ec2c75c&app_key=8ed44a101b9f481e897c3a03b0b8ccd2`)
            .then(response => {
                console.log(response.data.hints[0].label);
                    this.setState({
                        itemsLoaded: response.data.hints
                    })
                    console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })

    }

    backHandler = () => {
        this.props.toggleMap();
    }

    sliderHandler = (e) => {
        this.setState({
            value: e.target.value,
            zoom: e.target.value
        })
    }

    changeZoom = event => {
        this.setState({
            zoom: event.zoom
        })
    }

    render(){

        let markers = [];
        let items = [];
        let item = this.props.item.toLowerCase();

        if(this.state.itemsLoaded.length !==0){
            items = this.state.itemsLoaded.map(item =>(
                <div className="DetailsContent">
                    <img src={item.food.uri} />
                    <div>{item.food.label}</div>
                    <div>{item.food.brand}</div>
                </div>
            ));
        }

        for(const key of Object.keys(data)){
            markers.push(<Marker 
                units={data[key].products[item].quantity}
                lat={data[key].location.lat}
                lng={data[key].location.lng} />)
        }

        let location = {
            lat : this.state.lat,
            lng : this.state.lng
        }

        return(
        <div style={{height: '100%', width: '100%'}}>
            <div className="NavBar">
                <span onClick={this.backHandler} className="BackMain">
                    <i className="fas fa-arrow-left" />
                    <span className="Back">Back</span>
                </span>
                <input type="range" min="1" max="20" value={this.state.zoom} onChange={this.sliderHandler} className="Slider"/>
            </div>
            <div className="MapContainer">
                <div className="Map">   
                    <GoogleMapReact 
                        bootstrapURLKeys={{key: "AIzaSyAJKRevH5FV5gSg6_4DJ5bNd9mtizOcOvo" }}
                        center={location}
                        zoom={Number(this.state.zoom)}
                        onChange={this.changeZoom}
                        >  
                        {markers}
                    </GoogleMapReact>
                </div>
                <div className="Details">
                    {this.state.itemsLoaded.length === 0? "Loading..." : items}
                </div>
            </div>
        </div>
        );
    }
}

export default Map;