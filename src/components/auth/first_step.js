import React, { Component } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";

export default class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      values: [{ value: null }] || localStorage.getItem("values"),
      jobs: JSON.parse(localStorage.getItem("values")),
      gender: localStorage.getItem("gender"),
      email: localStorage.getItem("email"),
    };
  }

  // createUI() {
  //   return this.state.values.map((el, i) => (
  //     <div key={i}>
  //       <Form.Group controlId="formBasicText">
  //         <Form.Control
  //           type="text"
  //           placeholder="Enter Jobs"
  //           className="pt-4 pb-4 pl-4 pr-0 input-auth"
  //           name="values"
  //           required
  //           value={el.value || ""}
  //           onChange={this.handleChange.bind(this, i)}
  //         />
  //         <input
  //           type="button"
  //           value="remove"
  //           onClick={this.removeClick.bind(this, i)}
  //         />
  //       </Form.Group>
  //     </div>
  //   ));
  // }

  addChange(i, event) {
    let values = [...this.state.values];
    values[i].value = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({
      values: [...prevState.values, { value: null }],
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handlerChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push("/signup/2");
    localStorage.setItem("firstName", this.state.firstName);
    localStorage.setItem("lastName", this.state.lastName);
    localStorage.setItem("values", JSON.stringify(this.state.values));
    localStorage.setItem("gender", this.state.gender);
    localStorage.setItem("email", this.state.email);
  };

  render() {
    return (
      <Container>
        <h2 className="main-color font-weight-bold text-center">
          Let’s Get Started !
        </h2>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicText">
                <Form.Label className="blur-color">First Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder={
                    localStorage.getItem("firstName") || "Enter Name"
                  }
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  name="firstName"
                  required
                  defaultValue={localStorage.getItem("firstName")}
                  onChange={this.handlerChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicText">
                <Form.Label className="blur-color">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={localStorage.getItem("lastName") || "Enter Name"}
                  className="pt-4 pb-4 pl-4 pr-0 input-auth"
                  name="lastName"
                  required
                  defaultValue={localStorage.getItem("lastName")}
                  onChange={this.handlerChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Label className="blur-color">Jobs</Form.Label>
          {this.state.values.map((el, i) => (
            <div key={i}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      type="text"
                      placeholder="Enter Jobs"
                      className="pt-4 pb-4 pl-4 pr-0 input-auth"
                      name="values"
                      required
                      defaultValue={el.value || ""}
                      onChange={(e) => this.addChange(i, e)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    value="add more"
                    className="w-100 btn-main pt-2 pb-2 font-weight-medium"
                    onClick={() => this.addClick()}
                  >
                    Add
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    value="remove"
                    className="w-100 btn-main pt-2 pb-2 font-weight-medium"
                    onClick={() => this.removeClick(i)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
          <Form.Group controlId="formBasicText">
            <Form.Label className="blur-color">Gender</Form.Label>
            <Form.Control
              as="select"
              type="text"
              name="gender"
              required
              onChange={this.handlerChange}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="blur-color">Email address*</Form.Label>
            <Form.Control
              type="email"
              placeholder={localStorage.getItem("email") || "Enter email"}
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="email"
              required
              defaultValue={localStorage.getItem("email")}
              onChange={this.handlerChange}
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            className="w-100 btn-main pt-2 pb-2 font-weight-medium"
          >
            Next
          </Button>
        </Form>
        <span
          className="w-100"
          style={{ color: "red", marginBottom: "15px", textAlign: "center" }}
        ></span>
      </Container>
    );
  }
}
