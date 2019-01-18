import React from "react";
import { Col, FormInline, Button } from "mdbreact";
import API from '../../../utils/api/axios-api';
import Instance from '../../../utils/api/axios-instance';
import "./style.css";

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      lat: props.lat,
      long: props.long
    }
    
    console.log(props);
  }

  componentDidMount() {

    // this.setState((props) => ({
    //   lat: props.lat,
    //   long: props.long
    // }));
    
    // this.setState((props) => ({
    //   lat: props.lat,
    //   long: props.long
    // }));

    // this.latLong();

    
  }

  latLong() {
    API.axiosGet(Instance.baseAPI, `/cars/locations?lat=${this.state.lat}&long=${this.state.long}`, (res) => {

      console.log(
        `Frontend response:`)

      console.log(res);
    })
  }

  render() {
    return (
      <div className="searchBar">
        <Col md="12">
          <FormInline className="md-form mr-auto mb-4">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <Button
              gradient="aqua"
              rounded
              size="sm"
              type="submit"
              className="mr-auto"
              onClick={() => this.latLong()}
            >
              Search
          </Button>
          </FormInline>
        </Col>
      </div>
    );
  }
}

export default SearchPage;