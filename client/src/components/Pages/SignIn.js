import React, { Component } from "react";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';
import userAuth from "../../utils/api/userAuth";
import axios from "axios";




class SignUpIn extends Component {

    state = {
        username: "",
        password: ""
    }

    componentWillMount = () => {
        console.log(axios.defaults.headers.common)
    }

    handleusername = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handlepassword = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSignUp = (event) => {
        console.log("working")
        const obj = {
            email: this.state.username,
            password: this.state.password
        }

        userAuth.signUp(obj).then(res => this.props.history.push("/"))
    }

    handleLogin = () => {

        const obj = {
            email: this.state.username,
            password: this.state.password
        }

        userAuth.signIn(obj).then(res => {
            console.log(res.data.email)

        

            axios.defaults.headers.common['authorization'] = res.data.token;

            localStorage.setItem("userToken", res.data.token)

            

            this.props.history.push("/home")
        })

    }



    handlelogOut = () => {

        axios.defaults.headers.common['authorization'] = "";
        localStorage.removeItem("userToken")
  
        this.props.history.push("/")
  
  
    }



    render() {
        return (

            <div className="signInBack">
            <Container>

                <Form className="signInBox">
                    <FormGroup>
                        <Label for="exampleEmail">UserName</Label>
                        <Input type="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleusername}
                            placeholder="Username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handlepassword}
                            placeholder="password" />
                    </FormGroup>

                    <Button className="btnSpace2" color="primary" onClick={this.handleSignUp}> Sign Up</Button>

                    <Button className="btnSpace2" color="primary" onClick={this.handleLogin}
                    > Login</Button>

                    <Button className="btnSpace2" color="primary" onClick={this.handlelogOut}
                    > Logout</Button>

                </Form>

            </Container>
            </div>



        )
    }

}

export default SignUpIn