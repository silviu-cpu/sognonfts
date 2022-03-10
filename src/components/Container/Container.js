import React from 'react';
import styles from './Container.module.css';
import '../Container/Container.css'

const Container = () => (
  
    <div className={styles.part}>
      <div className="container d-flex flex-column align-items-center justify-content-center hi">
        <h3>Sogno will release a NFT  Collection made of 3333 pieces of digital art</h3>
        <p>that will have utility both IN REAL LIFE and ON-CHAIN.</p>
      </div>
    </div>
  
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
