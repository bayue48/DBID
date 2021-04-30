import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./auth.css";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstname: "",
      lastname: "",
      jobs: [],
      gender: "",
      email: "",
      laptop: "",
      address: "",
      number: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary float-left"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }
  
  
  render() {
    return (
      <div>
        <Container className="auth">
          <div>
            <h1>DBID Registration</h1>
            <p>Information {this.state.currentStep} </p>

            <form onSubmit={this.handleSubmit}>
              {/* 
          render the form steps and pass required props in
        */}
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                firstname={this.state.firstname}
                lastname={this.state.lastname}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                username={this.state.username}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                password={this.state.password}
              />
              {this.previousButton()}
              {this.nextButton()}
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <Row>
        <Col>
          <label htmlFor="firstname">First Name</label>
          <input
            className="form-control"
            id="firstname"
            name="firstname"
            type="text"
            placeholder="Enter firstname"
            value={props.firstname}
            onChange={props.handleChange}
          />
        </Col>
        <Col>
          <label htmlFor="lastname">Last Name</label>
          <input
            className="form-control"
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Enter lastname"
            value={props.lastname}
            onChange={props.handleChange}
          />
        </Col>
      </Row>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

export default MasterForm;
