// @flow
import React, { Component } from 'react';
import styles from './Rule.css';

export type $Rule = {
  is: number,
  has: Array<number>,
  becomes: number,
};

type Props = {
  onSubmit: Function,
};

export default class RuleForm extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      is: 1,
      has: [],
      becomes: 1,
    };
  }

  state: $Rule
  props: Props

  render() {
    const { onSubmit } = this.props;
    const { is, has, becomes } = this.state;
    return (
      <div className={styles.rule}>
        <div className="description">
          <span>If cell is </span>
          <select
            name="is"
            value={is}
            onChange={({ target }) => {
              this.setState({ is: target.value });
            }}
          >
            <option value={1}>Alive</option>
            <option value={0}>Dead</option>
          </select>
          <span> and has </span>
          <input
            name="has"
            type="text"
            value={has.join(',')}
            onChange={({ target }) => {
              this.setState({ has: target.value.split(',') });
            }}
          />
          <span> alive neighbors, then it becomes </span>
          <select
            name="becomes"
            value={becomes}
            onChange={({ target }) => {
              this.setState({ becomes: target.value });
            }}
          >
            <option value={1}>Alive</option>
            <option value={0}>Dead</option>
          </select>
        </div>
        <div className="add">
          <button
            onClick={() => {
              onSubmit(this.state);
              this.setState({
                has: [],
              });
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
