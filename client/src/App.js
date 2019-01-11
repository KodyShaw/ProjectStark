import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/api/axios-api';
import Instance from './utils/api/axios-instance'

class App extends Component {
  componentDidMount() {
    API.axiosGet(Instance.marketCheckSearch, `latitude=39.73&longitude=-104.99&radius=200&car_type=used&start=0&rows=10&sort_by=dist&sort_order=desc`, res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
