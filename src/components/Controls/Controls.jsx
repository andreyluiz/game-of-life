import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({
  onStart,
  onStop,
  onClear,
  onUpdateWorldSize,
  onUpdateSpeed,
  step,
  rows,
  cols,
  speed,
  started,
}) => (
  <div className={styles.controls}>
    <div className={styles.firstColumn}>
      <div className={styles.row}>
        <button
          onClick={started ? onStop : onStart}
          className={started ? styles.stopButton : styles.startButton}
        >
          {started ? 'Stop' : 'Start'}
        </button>
      </div>
      <div className={styles.row}>
        <button onClick={onClear} className={styles.clearButton}>
          Reset
        </button>
      </div>
      <div className={styles.row}>
        <div className={styles.step}>
          <span>Step {step}</span>
        </div>
      </div>
    </div>
    <div className={styles.secondColumn}>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="rows">
            Rows:
          </label>
          <input
            name="rows"
            type="number"
            value={rows}
            onChange={e => {
              onUpdateWorldSize(parseInt(e.target.value, 10), cols);
            }}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="cols">
            Columns:
          </label>
          <input
            name="cols"
            type="number"
            value={cols}
            onChange={e => {
              onUpdateWorldSize(rows, parseInt(e.target.value, 10));
            }}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="speed">
            Speed:
          </label>
          <input
            name="speed"
            type="range"
            value={speed}
            onChange={e => {
              onUpdateSpeed(parseInt(e.target.value, 10));
            }}
            min="1"
            max="1001"
          />
        </div>
      </div>
    </div>
  </div>
);

Controls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onUpdateWorldSize: PropTypes.func.isRequired,
  onUpdateSpeed: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  started: PropTypes.bool.isRequired,
};

export default Controls;
