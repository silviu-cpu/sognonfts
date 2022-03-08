import React from "react";
import * as ReactBootstrap from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <ReactBootstrap.Navbar>
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="#home">
            Sogno
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle />
          <ReactBootstrap.Navbar.Collapse className="justify-content-end">
            <ReactBootstrap.Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </ReactBootstrap.Navbar.Text>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </div>
  );
}

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
