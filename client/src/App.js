import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
      </Router>
    )
  }
}

export default App;
