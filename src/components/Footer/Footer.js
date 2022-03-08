import React from "react";
import styles from "./Footer.module.css";
import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="container justify-content-center d-flex align-items-center">
      Made with   <FontAwesomeIcon icon={faHeart} /> by Sogno
    </div>
  );
}
Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
