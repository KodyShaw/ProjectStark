import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import WelcomeJumbotron from "../WelcomeJumbotron";
import Search from "../Search";
import Footer from "../Footer";


class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <WelcomeJumbotron/>
                    <Search/>
                    <Footer/>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;