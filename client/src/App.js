import React, { Component } from 'react';
import './App.css';
import API from './utils/api/axios-api';
import Instance from './utils/api/axios-instance';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterNav from './components/Footer/FooterNav';
import SearchBar from './components/Search/SearchBar';
import Jumbotron from './components/Jumbotron';



class App extends Component {

  state = {
    zipcode: 85210,
    lat: 0,
    long: 0,
  }

  componentDidMount() {
    this.setLocation();
    this.latLong();
    // this.zipcode();
    
  }

  setLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        console.log(location.coords);
        this.setState({ lat: location.coords.latitude, long: location.coords.longitude })
      })
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  latLong() {
    API.axiosGet(Instance.baseAPI, `/cars/locations?lat=${this.state.lat}&long=${this.state.long}`, (res) => {

      console.log(`Frontend response:`)
      console.log(res);
    })
  }

  zipcode() {
    API.axiosGet(Instance.baseAPI, `/cars/locations?zip=${this.state.zipcode}`, (res) => {

      console.log(
        `Frontend response:`)

      console.log(res);

    });
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
        </Router>
        <Jumbotron />
        <SearchBar 
          lat={this.state.lat}
          long={this.state.long}
        />
        <FooterNav />
      </div>
    )
  }
}

export default App;
