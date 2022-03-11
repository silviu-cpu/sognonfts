import React from "react";
import styles from "./Container.module.css";
import "../Container/Container.css";
import Button from '@mui/material/Button';

const Container = () => (
  <div className="">
    <div className=" d-flex flex-column align-items-center justify-content-center part">
      
    </div>
    <div className="text">
        <h3>
          Sogno will release a NFT Collection made of 3333 unique pieces of Digital Art
        </h3>
        <Button variant="outlined" size="medium" className="white" href="https://linktr.ee/sognomusic" target="_blank">
          Follow
        </Button>
      </div>
  </div>
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
