import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is: 1,
      has: [],
      becomes: 1,
    };
  }

  render() {
    const { onSubmit } = this.props;
    const { is, has, becomes } = this.state;
    return (
      <tr>
        <td>
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
        </td>
        <td>
          <input
            name="has"
            type="text"
            value={has.join(',')}
            onChange={({ target }) => {
              this.setState({ has: target.value.split(',') });
            }}
          />
        </td>
        <td>
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
        </td>
        <td>
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
        </td>
      </tr>
    );
  }
}

RuleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RuleForm;
