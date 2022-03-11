import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerDoi.module.css';
import { Stage, Container, Sprite, Text } from '@inlet/react-pixi';

const ContainerDoi = () => (
  <div className={styles.ContainerDoi}>

    <Stage>
    <Sprite image="./my-image.png" x={100} y={100} />

  </Stage>
  </div>
  
);

ContainerDoi.propTypes = {};

ContainerDoi.defaultProps = {};

export default ContainerDoi;
