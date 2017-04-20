import React from 'react';
import styles from './App.css';

export default ({
  world,
}) => (
  <div className={styles.world}>
    {world.map(row => (
      <div className={styles.row}>
        {row.map(column => (
          <div className={column === 1 ? styles.alive : styles.dead}></div>
        ))}
      </div>
    ))}
  </div>
)
