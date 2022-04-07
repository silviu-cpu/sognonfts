import React, { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import logo from "../../assets/images/logo2.gif";
import elrondlogo from "../../assets/images/elrond-network-logo-vector.svg";
import "../Navbar/Navbar.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="container">
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" sticky="top">
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
              <Tooltip
                title="Coming soon"
                open={showTooltip}
                onOpen={() => setShowTooltip(true)}
                onClose={() => setShowTooltip(false)}
                arrow
              >
                <Button
                  onClick={() => setShowTooltip(!showTooltip)}
                  className="gray pixel"
                >
                  Roadmap
                </Button>
              </Tooltip>
              <Tooltip title="Coming soon" arrow>
                <Button className="gray pixel">Team</Button>
              </Tooltip>
              <Tooltip title="Coming soon" arrow>
                <Button className="gray pixel">Ambassadors</Button>
              </Tooltip>
              <Tooltip title="Coming soon" arrow>
                <Button className="gray pixel">Mint</Button>
              </Tooltip>
              <a
                className="social"
                href="https://discord.gg/heqjGbtPgM"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} className="discord" />
              </a>
              <a
                className="social"
                href="https://www.youtube.com/channel/UCenrHwE3KQm7XZ0kAfyjqrw"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="youtube" />
              </a>
              <a
                className="social"
                href="https://twitter.com/sognomusicnft"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="twitter" />
              </a>
              <a
                className="social"
                href="https://www.instagram.com/sognomusic.ro/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
              </a>
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
