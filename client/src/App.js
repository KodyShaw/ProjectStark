import React, { Component } from 'react';
import './App.css';
import API from './utils/api/axios-api';
import Instance from './utils/api/axios-instance'
import Nav from './components/Nav'
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
  }

  setLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success)
      function success(location) {
        this.setState({lat: location.coords.latitude, long: location.coords.longitude})
      }
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  zipcode() {
    API.axiosGet(Instance.baseAPI, `/cars/locations?zip=${this.state.zipcode}`, (res) => {

      console.log(
      `Frontend response:`)

      console.log(res); 

    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success)
      function success(location) {
        return location
      }
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  

  render() {
    return (
      <div>
      <Router>
        <Nav/>
      </Router>
      <Jumbotron/>
      <SearchBar/>
      <FooterNav/>
      </div>
    )
  }
}

export default App;
