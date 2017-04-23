import React from 'react';
import { connect } from 'react-redux';
import styles from './WorldView.css';

const WorldView = ({
  world,
}) => (
  <div className={styles.world}>
    {world.map((row, rowIndex) => (
      <div key={rowIndex} className={styles.row}>
        {row.map((column, colIndex) => (
          <div
            key={colIndex}
            className={column === 1 ? styles.alive : styles.dead}
            onClick={() => { this.props.toggleCell({ row: rowIndex, column: colIndex }); }}
          />
        ))}
      </div>
    ))}
  </div>
)

const mapStateToProps = state => ({
  world: state.simulation.world,
});

export default connect(mapStateToProps, null)(WorldView);
