import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import Controls from '../Controls';

const Simulator = ({ onControlEvent, running }) => (
  <Flex>
    <Controls onControlEvent={onControlEvent} running={running} />
  </Flex>
);

Simulator.propTypes = {
  onControlEvent: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired
};

export default Simulator;
