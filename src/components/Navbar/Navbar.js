import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import logo from '../../assets/images/logo.gif'
import elrondlogo from '../../assets/images/elrond-network-logo-vector.svg'

function Navbar() {
  return (
    <div className="container">
      <ReactBootstrap.Navbar>
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="#home">
            <img
              src={logo}
              width="160"
              height="160"
              className="d-inline-block align-top"
              alt="Sogno Logo"
            />
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle />
          <ReactBootstrap.Navbar.Collapse className="justify-content-end">
            <ReactBootstrap.Navbar.Text>
              Build on <img src={elrondlogo} width="100" height="150" alt="Elrond Logo"/>
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
