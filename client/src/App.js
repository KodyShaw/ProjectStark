import React, { Component } from 'react';
import './App.css';
import API from './utils/api/axios-api';
import Instance from './utils/api/axios-instance';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './components/Pages/NoMatch';
import Home from './components/Pages/Home';
import SearchResults from './components/SearchResults';




class App extends Component {

  state = {
    zipcode: 85210,
    lat: 0,
    long: 0,
    model: "f-250"
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
    API.axiosGet(Instance.locationAPI, '', {
      params: {
        model: this.state.model,
        lat: 33.3520579,
        long: -111.7912647,
        used: false
      }
   }, (res) => {

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
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/searchresults" component={SearchResults} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
