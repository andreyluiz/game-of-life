/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './World.css';

const World = ({ world, onToggleCell }) => (
  <div className={styles.world}>
    {world.map((row, rowIndex) => (
      <div key={rowIndex} className={styles.row}>
        {row.map((column, colIndex) => (
          <button
            key={colIndex}
            className={column === 1 ? styles.alive : styles.dead}
            onClick={() => onToggleCell(rowIndex, colIndex)}
          >
            <div
              className={column === 1 ? styles.innerAlive : styles.innerDead}
            />
          </button>
        ))}
      </div>
    ))}
  </div>
);

World.propTypes = {
  world: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onToggleCell: PropTypes.func.isRequired,
};

export default World;
