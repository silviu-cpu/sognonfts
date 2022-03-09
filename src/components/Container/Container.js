import React from 'react';
import styles from './Container.module.css';

const Container = () => (
  <div className="container">
  <div className={styles.containers}>
    <div className={`${styles.bg1} ${styles.part}`}>
        <h1>PRA</h1>
        <p>Goals Completed</p>
    </div>
    <div className={styles.bg1}>
        <h1>PRA asdasda xxx</h1>
        <p>PORC TV</p>
    </div>
    <div className={styles.bg1}>
        <h1>PRA asdasda xxx</h1>
        <p>PORC TV</p>
    </div>
  </div>
  </div>
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
