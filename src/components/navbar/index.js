import React from "react";
import { Nav } from "react-bootstrap";
import "./navbar.css";

function Bar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="nav-text" href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-text" eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-text" eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Bar;
