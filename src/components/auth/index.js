import React, { Component } from "react";
import "./auth.css";
import { logo } from "../../assets";
import Step1 from "./first_step";
import Step2 from "./middle_step";
import Step3 from "./last_step";
import { Route, Switch } from "react-router-dom";

export default class Auth extends Component {
  render() {
    return (
      <div
        className="bg-mask row"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/71cfa010-f8dd-4298-a94d-1ae5034a857c/75fda912-a4cf-483c-949f-730dd3693c37/ID-en-20210425-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-relative d-none d-md-block col-md-4 col-lg-6 p-0">
          <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
            <img src={logo} style={{ width: "50%" }} alt="logo" />
          </div>
        </div>

        <div className="full-h d-flex justify-content-center align-items-center col-12 col-md-8 col-lg-6">
          <div className="bg-mask col-10 col-md-8 col-xl-12 d-flex flex-column justify-content-center align-items-center font-weight-medium p-0">
            <Switch>
              <Route exact path="/signup" component={Step1} />
              <Route exact path="1" component={Step1} />
              <Route exact path="/signup/2" component={Step2} />
              <Route exact path="2" component={Step2} />
              <Route exact path="/signup/3" component={Step3} />
              <Route exact path="3" component={Step3} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
