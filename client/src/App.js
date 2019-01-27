import React, { Component } from 'react';
import './App.css';
import API from './utils/api/axios-api';
import Instance from './utils/api/axios-instance';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './components/Pages/NoMatch';
import Home from './components/Pages/Home';
import SignIn from './components/Pages/SignIn'
import SearchResults from './components/SearchResults';




class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/searchresults" component={SearchResults} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
