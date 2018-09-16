import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import Controls from '../Controls';
import World from '../World';

const Simulator = ({ onControlEvent, running, world, onToggleCell }) => (
  <Flex>
    <Controls onControlEvent={onControlEvent} running={running} />
    <World world={world} onToggleCell={onToggleCell} />
  </Flex>
);

Simulator.propTypes = {
  onControlEvent: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
  world: PropTypes.arrayOf(PropTypes.array).isRequired,
  onToggleCell: PropTypes.func.isRequired
};

export default Simulator;
