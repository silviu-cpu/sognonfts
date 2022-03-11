import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import logo from "../../assets/images/logo2.gif";
import elrondlogo from "../../assets/images/elrond-network-logo-vector.svg";
import "../Navbar/Navbar.css";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

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
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="me-auto">
              <Tooltip title="Coming soon" arrow>
                <Button className="gray">Roadmap</Button>
              </Tooltip>
              <Tooltip title="Coming soon" arrow>
                <Button className="gray">Team</Button>
              </Tooltip>
              <Tooltip title="Coming soon" arrow>
                <Button className="gray">Mint</Button>
              </Tooltip>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
          <ReactBootstrap.Navbar.Collapse className="justify-content-end">
            <ReactBootstrap.Navbar.Text className="hoveyr">
              Build on
              <img
                src={elrondlogo}
                width="100"
                height="150"
                alt="Elrond Logo"
              />
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
