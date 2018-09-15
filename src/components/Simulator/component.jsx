import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import Controls from '../Controls';

const Simulator = ({ onControlEvent }) => (
  <Flex>
    <Controls onControlEvent={onControlEvent} />
  </Flex>
);

Simulator.propTypes = {
  onControlEvent: PropTypes.func.isRequired
};

export default Simulator;
