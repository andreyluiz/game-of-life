import React, { Component } from 'react';
import { connect } from 'react-redux';
import { process } from './processing';
import { startSimulation, stopSimulation, toggleCell, updateWorldSize, updateSpeed } from './state';
import WorldView from './WorldView';

class App extends Component {
  componentDidMount() {
    // this.props.startSimulation();
    this.props.updateWorldSize({ rows: 20, columns: 20 });
  }

  componentWillUnmount() {
    this.props.stopSimulation();
  }

  render() {
    const { world } = this.props;
    return (
      <div>
        <WorldView />
        <button onClick={() => { this.props.stopSimulation() }}>Stop simulation</button>
        <button onClick={() => { this.props.startSimulation() }}>Start simulation</button>
        <div>
          <label htmlFor="rows">Rows:</label>
          <input
            name="rows"
            type="number"
            value={this.props.rows}
            onChange={(e) => {
              this.props.updateWorldSize({
                rows: parseInt(e.target.value),
                columns: this.props.columns,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="columns">Columns:</label>
          <input
            name="columns"
            type="number"
            value={this.props.columns}
            onChange={(e) => {
              this.props.updateWorldSize({
                rows: this.props.rows,
                columns: parseInt(e.target.value),
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="speed">Simulation speed:</label>
          <input
            name="speed"
            type="range"
            value={this.props.speed}
            onChange={(e) => {
              this.props.updateSpeed(e.target.value);
            }}
            min="1"
            max="1001"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ simulation: { step, rows, columns, speed }}) => ({
  step,
  rows,
  columns,
  speed,
})

export default connect(mapStateToProps, { startSimulation, stopSimulation, toggleCell, updateWorldSize, updateSpeed })(App)
