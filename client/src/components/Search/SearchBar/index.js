import React from "react";
import { Col, Fa } from "mdbreact";
import "./style.css";


class SearchPage extends React.Component {
  render() {
    return (
    
    <Col md="6">
   
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span className="input-group-text purple lighten-3" id="basic-text1" >
              <Fa className="text-white" icon="search"  />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
     
      </Col>
    );
  }
}

export default SearchPage;