import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import WelcomeJumbotron from "../WelcomeJumbotron";
import API from '../../utils/api/axios-api';
import Search from "../Search";
import Footer from "../Footer";
import Instance from '../../utils/api/axios-instance';
import Nav from '../Nav/index';


class Home extends Component {

    state = {
        zipcode: 85210,
        lat: 0,
        long: 0,
        model: "f-250"
      }
    
      componentDidMount() {
        this.setLocation();
        this.latLong();
        // this.zipcode();
    
      }
    
      setLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((location) => {
            console.log(location.coords);
            this.setState({ lat: location.coords.latitude, long: location.coords.longitude })
          })
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
    
      latLong() {
        API.axiosGet(Instance.locationAPI, '', {
          params: {
            model: this.state.model,
            lat: 33.3520579,
            long: -111.7912647,
            used: false
          }
       }, (res) => {
    
          console.log(`Frontend response:`)
          console.log(res);
        })
      }
    
      zipcode() {
        API.axiosGet(Instance.baseAPI, `/cars/locations?zip=${this.state.zipcode}`, (res) => {
    
          console.log(
            `Frontend response:`)
    
          console.log(res);
    
        });
      }
    
    render() {
        return (
            <div>
            <Nav />
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <WelcomeJumbotron/>
                    <Search/>
                    <Footer/>

                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Home;