import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<div className="fixed-bottom">
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">University of Arizona Code Camp</h5>
      <p>
       This was a project assigned to 4 student developers who all collaborated on the creation
       of this page. Get in touch with us through LinkedIn or GitHub!
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">Contact Us!</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Kody Shaw</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">David Demian</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Asim Ismail</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Mike Wylie</a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
    </Container>
  </div>
</Footer>
</div>
);
}
}

export default FooterPage;