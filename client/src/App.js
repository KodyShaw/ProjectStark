import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterNav from './components/Footer/FooterNav';
import SearchBar from './components/Search/SearchBar';
import Jumbotron from './components/Jumbotron';



class App extends Component {
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
