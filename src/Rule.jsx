// @flow
import React from 'react';
import styles from './Rule.css';

export type $Rule = {
  is: number,
  has: Array<number>,
  becomes: number,
};

type Props = {
  id: string,
  is: number,
  has: Array<number>,
  becomes: number,
  onDelete: Function,
};

export default ({
  id,
  is,
  has,
  becomes,
  onDelete,
}: Props) => (
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
