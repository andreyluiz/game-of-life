/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';

const Row = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  height: 20px;
`;

const Button = styled.button`
  flex: 0 0 20px;
  border: 1px solid black;
  position: relative;
  background-color: white;
  outline: none;
`;

const Column = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  background-color: ${props => (props.alive ? 'black' : 'alive')};
`;

const World = ({ world, toggleCell }) => (
  <Box>
    {world.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((column, colIndex) => (
          <Button
            key={colIndex}
            onClick={() => {
              toggleCell(rowIndex, colIndex);
            }}
          >
            <Column alive={column === 1} />
          </Button>
        ))}
      </Row>
    ))}
  </Box>
);

World.propTypes = {
  world: PropTypes.arrayOf(PropTypes.array).isRequired,
  toggleCell: PropTypes.func.isRequired
};

export default World;
