import React from "react";
import { Col, FormInline, Button } from "mdbreact";
import "./style.css";
import Footer from "../Footer";
import Nav from "../Nav";
import {Container, Row } from "../Grid";
import SearchCard from "../SearchCard";

class SearchResults extends React.Component {
    render() {
        return (
            <div>
            <Container fluid>
                <Row>

                    <Col size="md-12">
                    <SearchCard />



                    </Col>
                </Row>
            </Container>
            <Footer />
            </div>

        )
    }
}
export default SearchResults;