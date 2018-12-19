import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startSimulation, stopSimulation, clearSimulation, toggleCell, updateWorldSize, updateSpeed } from './state';
import styles from './Controls.css';

class Control extends Component {
  componentDidMount() {
    this.props.updateWorldSize({ rows: 20, columns: 20 });
  }

  componentWillUnmount() {
    this.props.stopSimulation();
  }

  render() {
    const {
      startSimulation,
      stopSimulation,
      clearSimulation,
      updateWorldSize,
      updateSpeed,
      step,
      rows,
      columns,
      speed,
      started,
    } = this.props;
    return (
      <div className={styles.controls}>
        <div className={styles.firstColumn}>
          <div className={styles.row}>
            <button
              onClick={started ? stopSimulation : startSimulation}
              className={started ? styles.stopButton : styles.startButton}
            >
              {started ? 'Stop' : 'Start'}
            </button>
          </div>
          <div className={styles.row}>
            <button
              onClick={clearSimulation}
              className={styles.clearButton}
            >
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
              <label className={styles.inputLabel} htmlFor="rows">Rows:</label>
              <input
                name="rows"
                type="number"
                value={rows}
                onChange={(e) => {
                  updateWorldSize({
                    rows: parseInt(e.target.value, 10),
                    columns,
                  });
                }}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="columns">Columns:</label>
              <input
                name="columns"
                type="number"
                value={columns}
                onChange={(e) => {
                  updateWorldSize({
                    rows,
                    columns: parseInt(e.target.value, 10),
                  });
                }}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="speed">Speed:</label>
              <input
                name="speed"
                type="range"
                value={speed}
                onChange={(e) => {
                  updateSpeed(e.target.value);
                }}
                min="1"
                max="1001"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Control.propTypes = {
  updateWorldSize: PropTypes.func.isRequired,
  stopSimulation: PropTypes.func.isRequired,
  startSimulation: PropTypes.func.isRequired,
  clearSimulation: PropTypes.func.isRequired,
  updateWorldSize: PropTypes.func.isRequired,
  updateSpeed: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  started: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ simulation: { step, rows, columns, speed, started } }) => ({
  step, rows, columns, speed, started,
});

export default connect(
  mapStateToProps,
  { startSimulation, stopSimulation, clearSimulation, toggleCell, updateWorldSize, updateSpeed },
)(Control);
