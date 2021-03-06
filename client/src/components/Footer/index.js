import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./style.css";

class FooterPage extends React.Component {
render() {
return (
<div className="footer">
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">University of Arizona Code Camp</h5>
      <p>
       This was a project assigned to 4 student developers who all collaborated on the creation
       of this page. Get in touch with us through our LinkedIn profiles to the right or go directly to our <a  className="link" href="https://github.com/KodyShaw/ProjectStark">GitHub</a> page!
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">Contact Us!</h5>
      <ul>
        <li className="list-unstyled">
          <a href="https://www.linkedin.com/in/kody-shaw-3a6049159/">Kody Shaw</a>
        </li>
        <li className="list-unstyled">
          <a href="https://www.linkedin.com/in/daviddemian11/">David Demian</a>
        </li>
        <li className="list-unstyled">
          <a href="https://www.linkedin.com/in/asim-ismail-b110ab168/">Asim Ismail</a>
        </li>
        <li className="list-unstyled">
          <a href="https://www.linkedin.com/in/michael-wylie-23035115a/">Mike Wylie</a>
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