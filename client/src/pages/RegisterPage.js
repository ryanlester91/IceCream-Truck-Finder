import Jumbotron from "./Components/Jumbotron";
import { Container, Row, Col } from "./Components/Grid"
import { Input, TextArea, FormBtn } from "../Components/Form";
import React, { Component } from "react";

class LogInPage extends Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-center">
                        Register
                    </h1>
                </Jumbotron>

                <Row>
                    <div className="col-lg-6">
                        <div className="card card-default">
                            <div className="card-header">
                                Input Your Information
                            </div>
                            <div className="card-body">
                                <form action="/register" method="POST">
                                    <div className="form-group row">
                                        <label for="email">Email:</label>
                                        <input className="form-control" id="email" name="email" type="email"/>
                                    </div>
                                    <div className="form-group row">
                                        <label for="password">Password:</label>
                                        <input className="form-control" id="password" name="password" type="password"/>
                                    </div>
                                    <button action="POST" type="submit">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Row>
                <br/>
                <a href="/"><h3>Not An Employee? Click Here!</h3></a>
            </Container>
    )
    }
}