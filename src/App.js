import React, { Component } from 'react';
import { process } from './processing';
import styles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      step: 0,
      world:
        [ [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
          [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
          [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0] ],
    };
  }

  componentDidMount() {
    const timer = setInterval(this.tick.bind(this), 500);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    const { step, world } = this.state;
    this.setState({
      step: step + 1,
      world: process(world),
    });
  }

  render() {
    const { world } = this.state;
    return (
      <div>
        <div className={styles.world}>
          {world.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((column, colIndex) => (
                <div key={rowIndex + colIndex} className={column === 1 ? styles.alive : styles.dead}></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
