// @flow
import React from 'react';
import WorldView from './WorldView';
import Controls from './Controls';
import styles from './Simulator.css';

export default () => (
  <div className={styles.simulator}>
    <Controls />
    <WorldView />
  </div>
);
