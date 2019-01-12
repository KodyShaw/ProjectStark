import React from "react";
import { Col, FormInline, Button } from "mdbreact";
import "./style.css";

class SearchPage extends React.Component {
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