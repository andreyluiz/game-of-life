import React, { Component } from 'react';
import { connect } from 'react-redux';
import { process } from './processing';
import { startSimulation, stopSimulation, toggleCell, updateWorldSize } from './state';
import styles from './App.css';

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
        <button onClick={() => { this.props.stopSimulation() }}>Stop simulation</button>
        <button onClick={() => { this.props.startSimulation() }}>Start simulation</button>
        <div>
          <label htmlFor="rows">Rows:</label>
          <input
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
      </div>
    );
  }
}

const mapStateToProps = ({ simulation: { world, step, rows, columns }}) => ({
  world,
  step,
  rows,
  columns,
})

export default connect(mapStateToProps, { startSimulation, stopSimulation, toggleCell, updateWorldSize })(App)
