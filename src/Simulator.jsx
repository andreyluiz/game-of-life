import React from 'react';
import WorldView from './WorldView';
import Controls from './Controls';
import Rules from './Rules';
import styles from './Simulator.css';

export default () => (
  <div className={styles.simulator}>
    <Controls />
    <Rules />
    <WorldView />
  </div>
);
