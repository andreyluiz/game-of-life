/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleCell } from './state';
import styles from './WorldView.css';

const WorldView = ({
  world,
  toggleCell,
}) => (
  <div className={styles.world}>
    {world.map((row, rowIndex) => (
      <div key={rowIndex} className={styles.row}>
        {row.map((column, colIndex) => (
          <button
            key={colIndex}
            className={column === 1 ? styles.alive : styles.dead}
            onClick={() => { toggleCell({ row: rowIndex, column: colIndex }); }}
          >
            <div className={column === 1 ? styles.innerAlive : styles.innerDead} />
          </button>
        ))}
      </div>
    ))}
  </div>
);

WorldView.propTypes = {
  world: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  toggleCell: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  world: state.simulation.world,
});

export default connect(mapStateToProps, { toggleCell })(WorldView);
