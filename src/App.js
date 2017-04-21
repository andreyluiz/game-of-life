import React, { Component } from 'react';
import { connect } from 'react-redux';
import { process } from './processing';
import { startSimulation, stopSimulation, aliveCell } from './state';
import styles from './App.css';

class App extends Component {
  componentDidMount() {
    // this.props.startSimulation();
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
                  onClick={() => { this.props.aliveCell({ row: rowIndex, column: colIndex }); }}
                />
              ))}
            </div>
          ))}
        </div>
        <button onClick={() => { this.props.stopSimulation() }}>Stop simulation</button>
        <button onClick={() => { this.props.startSimulation() }}>Start simulation</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  world: state.simulation.world,
  step: state.simulation.world,
})

export default connect(mapStateToProps, { startSimulation, stopSimulation, aliveCell })(App)
