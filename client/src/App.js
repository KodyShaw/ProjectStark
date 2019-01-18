import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './components/Pages/NoMatch';
import Home from './components/Pages/Home';
import SearchResults from './components/SearchResults'




class App extends Component {
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
