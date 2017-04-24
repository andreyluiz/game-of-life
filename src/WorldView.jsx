// @flow
/* eslint react/no-array-index-key: 0 */
import React from 'react';
import { connect } from 'react-redux';
import styles from './WorldView.css';

// @flow weak
type Props = {
  world: Array<Array<Number>>,
  toggleCell: Function,
};

const WorldView = ({
  world,
  toggleCell,
}: Props) => (
  <div className={styles.world}>
    {world.map((row, rowIndex) => (
      <div key={rowIndex} className={styles.row}>
        {row.map((column, colIndex) => (
          <button
            key={colIndex}
            className={column === 1 ? styles.alive : styles.dead}
            onClick={() => { toggleCell({ row: rowIndex, column: colIndex }); }}
          />
        ))}
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  world: state.simulation.world,
});

export default connect(mapStateToProps, null)(WorldView);
