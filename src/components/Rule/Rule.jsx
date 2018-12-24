import React from 'react';
import PropTypes from 'prop-types';

const labels = ['Dead', 'Alive'];

export const RulePropType = {
  id: PropTypes.string.isRequired,
  is: PropTypes.number.isRequired,
  has: PropTypes.arrayOf(PropTypes.number).isRequired,
  becomes: PropTypes.number.isRequired,
};

const Rule = ({ id, is, has, becomes, onDelete }) => (
  <tr>
    <td>{labels[is]}</td>
    <td>{has.join(', ')}</td>
    <td>{labels[becomes]}</td>
    <td>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </button>
    </td>
  </tr>
);

Rule.propTypes = {
  id: PropTypes.string.isRequired,
  is: PropTypes.number.isRequired,
  has: PropTypes.arrayOf(PropTypes.number).isRequired,
  becomes: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Rule;
