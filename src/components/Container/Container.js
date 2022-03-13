import React from "react";
import styles from "./Container.module.css";
import "../Container/Container.css";
import Button from '@mui/material/Button';

const Container = () => (
  <div className="">
    <div className=" d-flex flex-column align-items-center justify-content-center part">
      
    </div>
    <div className="text">
        <h3 className="mt">
          The first Techno Brand build on a NFT Collection based on the Elrond Blockchain
        </h3>
        <h4>
                  
        Sogno will innovate and contribute to the development 
        </h4>
        <h4 className="mt">
        of the next Music NFTs ecosystem build on Elrond
        </h4>
        <Button variant="outlined" size="medium" className="white" href="https://linktr.ee/sognomusic" target="_blank">
          Follow
        </Button>
      </div>
  </div>
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
