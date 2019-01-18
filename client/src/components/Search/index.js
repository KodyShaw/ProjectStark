import React from "react";
import { Col, FormInline, Button } from "mdbreact";
import "./style.css";
import {Redirect} from "react-router";

class Search extends React.Component {
  state = {
    searchTextInput: "",
    redirect: false
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({redirect: true});
    // make API call 
  }

  render() {
    if(this.state.redirect){
      return <Redirect push to = "/searchresults"/>;
    }
    return (
        <div className="searchBar">
      <Col md="12">
        <FormInline className="md-form mr-auto mb-4">
          <input
          onChange={this.handleInputChange}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            name="searchTextInput"
            value={this.state.searchTextInput}
          />
          <Button onClick= {this.handleFormSubmit}

          
            gradient="aqua"
            rounded
            size="sm"
            type="submit"
            className="mr-auto"
          >
            Search
          </Button>
        </FormInline>
      </Col>
      </div>
    );
  }
}

export default Search;