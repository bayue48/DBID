import React, { Component } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";

export default class Step3 extends Component {
  constructor() {
    super();
    this.state = {
      jobs: JSON.parse(localStorage.getItem("values")),
    };
  }

  handlerChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/");
    localStorage.clear();
  };

  handleBack = async (e) => {
    e.preventDefault();
    this.props.history.push("/signup/2");
  };

  render() {
    return (
      <Container>
        <h2 className="main-color font-weight-bold text-center">
          Confirmation
        </h2>
        <Form className="w-100 mb-3 mt-3">
          <Form.Group controlId="formBasicText">
            <Row>
              <Col>
                <Form.Label className="blur-color">Fullname: </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={
                    localStorage.getItem("firstName") +
                      " " +
                      localStorage.getItem("lastName") || "Name"
                  }
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  readOnly
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="blur-color">Jobdesc: </Form.Label>
              </Col>
              <Col>
                {this.state.jobs.map((values) => {
                  return (
                    <Row>
                    <Form.Control
                      key={values.value}
                      placeholder={values.value}
                      className="pt-4 pb-4 pl-4 pr-0 input-auth"
                      readOnly
                    />
                    </Row>
                  );
                })}
                </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="blur-color">Gender:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={localStorage.getItem("gender")}
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  readOnly
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="blur-color">E-mail:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={localStorage.getItem("email")}
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  readOnly
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="blur-color">
                  Have a Laptop/PC:
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={localStorage.getItem("laptop")}
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  readOnly
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="blur-color">Mobile number:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={localStorage.getItem("number")}
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  readOnly
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="blur-color">Address:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder={localStorage.getItem("address")}
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  readOnly
                />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col>
              <Button
                variant="danger"
                type="submit"
                onClick={this.handleBack}
                className="w-100 btn-main pt-2 pb-2 font-weight-medium"
              >
                Back
              </Button>
            </Col>
            <Col>
              <Button
                onClick={this.handlerSubmit}
                variant="danger"
                type="submit"
                className="w-100 btn-main pt-2 pb-2 font-weight-medium"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        <span
          className="w-100"
          style={{ color: "red", marginBottom: "15px", textAlign: "center" }}
        ></span>
      </Container>
    );
  }
}
