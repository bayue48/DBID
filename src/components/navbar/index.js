import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";

function Nav() {
  const history = useHistory();
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        onClick={() => {
          history.push("/");
        }}
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <Button className="button-navbar" variant="danger" onClick={() => {
          history.push("/signup");
        }}>Sign Up</Button>
    </div>
  );
}

export default Nav;
