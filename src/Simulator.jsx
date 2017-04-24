// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSimulation, stopSimulation, toggleCell, updateWorldSize, updateSpeed } from './state';
import WorldView from './WorldView';

class App extends Component {
  componentDidMount() {
    this.props.updateWorldSize({ rows: 20, columns: 20 });
  }

  componentWillUnmount() {
    this.props.stopSimulation();
  }

  // @flow weak
  props: {
    updateWorldSize: Function,
    stopSimulation: Function,
    startSimulation: Function,
    updateWorldSize: Function,
    updateSpeed: Function,
    step: Number,
    rows: Number,
    columns: Number,
    speed: Number,
  }

  render() {
    const {
      stopSimulation,
      startSimulation,
      updateWorldSize,
      updateSpeed,
      step,
      rows,
      columns,
      speed,
    } = this.props;
    return (
      <div>
        <WorldView />
        <button onClick={stopSimulation}>Stop simulation</button>
        <button onClick={startSimulation}>Start simulation</button>
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

const mapStateToProps = ({ simulation: { step, rows, columns, speed } }) => ({
  step,
  rows,
  columns,
  speed,
});

export default connect(
  mapStateToProps,
  { startSimulation, stopSimulation, toggleCell, updateWorldSize, updateSpeed },
)(App);
