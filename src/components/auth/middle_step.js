import React, { Component } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";

export default class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      laptop: "",
      address: "",
      number: "",
    };
  }

  handlerChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (event) => {
    event.preventDefault();
    if (this.state.laptop === "") {
      alert("Please select Yes/No");
    } else if (this.state.address === "") {
      alert("Please input address");
    } else if (this.state.number === "") {
      alert("Please input number");
    } else {
      this.props.history.push("/signup/3");
      localStorage.setItem("laptop", this.state.laptop);
      localStorage.setItem("address", this.state.address);
      localStorage.setItem("number", this.state.number);
    }
  };

  handleBack = async (e) => {
    e.preventDefault();
    this.props.history.push("/signup/");
    localStorage.setItem("laptop", this.state.laptop);
    localStorage.setItem("address", this.state.address);
    localStorage.setItem("number", this.state.number);
  };

  render() {
    return (
      <Container>
        <h2 className="main-color font-weight-bold text-center">Step 2</h2>
        <Form className="w-100 mb-3 mt-3">
          <Form.Group controlId="formBasicText">
            <Form.Label className="blur-color">Have Laptop?</Form.Label>
            <Row style={{ justifyContent: "space-around" }}>
              <Form.Check
                className="blur-color"
                type="radio"
                label="Yes"
                name="laptop"
                id="formHorizontalRadios1"
                value="Yes"
                onChange={this.handlerChange}
              />
              <Form.Check
                className="blur-color"
                type="radio"
                label="No"
                name="laptop"
                id="formHorizontalRadios2"
                value="No"
                onChange={this.handlerChange}
              />
            </Row>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="blur-color">Address</Form.Label>
            <Form.Control
              as="textarea"
              required
              type="text"
              rows={3}
              placeholder={localStorage.getItem("address") || "Enter adress"}
              name="address"
              defaultValue={localStorage.getItem("address")}
              onChange={this.handlerChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label className="blur-color">Mobile number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder={localStorage.getItem("number") || "Enter number"}
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="number"
              defaultValue={localStorage.getItem("number")}
              onChange={this.handlerChange}
            />
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
                Next
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
