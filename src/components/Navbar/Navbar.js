import React from "react";
import * as ReactBootstrap from "react-bootstrap";

function Navbar() {
  return (
    <div className="container">
      <ReactBootstrap.Navbar>
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="#home">
            Sogno
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle />
          <ReactBootstrap.Navbar.Collapse className="justify-content-end">
            <ReactBootstrap.Navbar.Text>
              Powered by Elrond
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
