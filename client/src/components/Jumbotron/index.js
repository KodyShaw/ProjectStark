import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./style.css"

const JumbotronPage = () => {
  return (
      <div className="jumboTron">
    <MDBJumbotron fluid>
      <MDBContainer>
        <h2 className="display-4">Welcome!</h2>
        <p className="lead">Lets start with the type of car you want..</p>
      </MDBContainer>
    </MDBJumbotron>
    </div>
  )
}

export default JumbotronPage;