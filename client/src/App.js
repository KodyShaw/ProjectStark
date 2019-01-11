import React, { Component } from 'react';
import './App.css';
import API from './utils/api/axios-api';
import Instance from './utils/api/axios-instance'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  componentDidMount() {
    API.axiosGet(Instance.marketCheckSearch, `latitude=39.73&longitude=-104.99&radius=200&car_type=used&start=0&rows=10&sort_by=dist&sort_order=desc`, res => {
      console.log(res);
    })
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
