import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rule.css';

export const RulePropType = {
  id: PropTypes.string.isRequired,
  is: PropTypes.number.isRequired,
  has: PropTypes.arrayOf(PropTypes.number).isRequired,
  becomes: PropTypes.number.isRequired,
};

const Rule = ({ id, is, has, becomes, onDelete }) => (
  <div className={styles.rule}>
    <div className="description">
      <span>If cell is </span>
      <span className={styles.keyword}>{is === 1 ? 'Alive' : 'Dead'}</span>
      <span> and has </span>
      <span className={styles.keyword}>{has.join(' or ')}</span>
      <span> alive neighbors, then it becomes </span>
      <span className={styles.keyword}>{becomes === 1 ? 'Alive' : 'Dead'}</span>
    </div>
    <div className="delete">
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </button>
    </div>
  </div>
);

Rule.propTypes = {
  id: PropTypes.string.isRequired,
  is: PropTypes.number.isRequired,
  has: PropTypes.arrayOf(PropTypes.number).isRequired,
  becomes: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Rule;
