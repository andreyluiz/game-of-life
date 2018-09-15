import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Button } from 'rebass';

const Controls = ({ onControlEvent }) => (
  <Flex direction="column" width={200}>
    <Flex width="100%">
      <Box pr={1} width={1 / 2}>
        <Button css={{ width: '100%' }} onClick={() => onControlEvent('play')}>
          Play
        </Button>
      </Box>
      <Box pl={1} width={1 / 2}>
        <Button css={{ width: '100%' }} onClick={() => onControlEvent('pause')}>
          Pause
        </Button>
      </Box>
    </Flex>
  </Flex>
);

Controls.propTypes = {
  onControlEvent: PropTypes.func.isRequired
};

export default Controls;
