import React, { Component } from 'react';
import './App.css';
import API from './utils/api/axios-api';
import Instance from './utils/api/axios-instance'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {

  state = {
    zipcode: 85210
  }

  componentDidMount() {
    API.axiosGet(Instance.baseAPI, `/cars/locations/${this.state.zipcode}`, (req,res) => {

      console.log(
      `Frontend response: 
      ${res}`)

    });
  }

  render() {
    return (
      <Router>
        <Nav/>
      </Router>
    )
  }
}

export default App;
