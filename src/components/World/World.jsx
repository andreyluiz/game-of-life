/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  max-height: 20px;
`;

const Cell = styled.div`
  flex: 0 0 20px;
  position: relative;
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 0;
  padding: 0;
  outline: none;
  border: 1px solid black;
`;

const InnerCell = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  background-color: ${props => (props.status === 1 ? 'black' : 'white')};
`;

const World = ({ world, onToggleCell }) => (
  <Box>
    {world.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((column, colIndex) => (
          <Cell
            key={colIndex}
            status={column}
            onClick={() => onToggleCell(rowIndex, colIndex)}
          >
            <InnerCell status={column} />
          </Cell>
        ))}
      </Row>
    ))}
  </Box>
);

World.propTypes = {
  world: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onToggleCell: PropTypes.func.isRequired,
};

export default World;
