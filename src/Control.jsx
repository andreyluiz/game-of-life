// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSimulation, stopSimulation, toggleCell, updateWorldSize, updateSpeed } from './state';

class Control extends Component {
  componentDidMount() {
    this.props.updateWorldSize({ rows: 20, columns: 20 });
  }

  componentWillUnmount() {
    this.props.stopSimulation();
  }

  props: {
    updateWorldSize: Function,
    stopSimulation: Function,
    startSimulation: Function,
    updateWorldSize: Function,
    updateSpeed: Function,
    step: number,
    rows: number,
    columns: number,
    speed: number,
    started: boolean,
  }

  render() {
    const {
      startSimulation,
      stopSimulation,
      updateWorldSize,
      updateSpeed,
      step,
      rows,
      columns,
      speed,
      started,
    } = this.props;
    return (
      <div>
        <button
          onClick={started ? stopSimulation : startSimulation}
        >
          {started ? 'Stop' : 'Start'}
        </button>
        <div>
          <label htmlFor="rows">Rows:</label>
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
        <div>
          <label htmlFor="columns">Columns:</label>
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
        <div>
          <label htmlFor="speed">Simulation speed:</label>
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
        <div>
          <span>{step}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ simulation: { step, rows, columns, speed, started } }) => ({
  step, rows, columns, speed, started,
});

export default connect(
  mapStateToProps,
  { startSimulation, stopSimulation, toggleCell, updateWorldSize, updateSpeed },
)(Control);
