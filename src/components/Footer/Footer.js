import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="container justify-content-center d-flex align-items-center">
      Made with   <div className={styles.heart}> <FontAwesomeIcon icon={faHeart} beat className={styles.red}/> </div> by Sogno 
    </div>
  );
}
Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
