import React from 'react';
import World from '../World';
import Controls from '../Controls';
import Rules from '../Rules';
import styles from './Simulator.css';

const Simulator = () => (
  <div className={styles.simulator}>
    <Controls />
    <Rules />
    <World />
  </div>
);

export default Simulator;
