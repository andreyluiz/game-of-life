import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Box, Text } from 'rebass';
import styled from 'styled-components';

const NumberInput = styled.input`
  font-size: 14px;
  padding: 4px;
  width: 100%;
`;

const RangeInput = styled.input`
  width: 100%;

  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;

  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: steelblue;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  :focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  ::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: steelblue;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  ::-ms-fill-upper {
    background: steelblue;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  ::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: steelblue;
  }
  :focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

const CustomButton = styled(Button)`
  background-color: steelblue;
  font-weight: normal;
  outline: none;
`;

const Controls = ({
  onStart,
  onStop,
  onClear,
  onUpdateWorldSize,
  onUpdateSpeed,
  step,
  rows,
  cols,
  speed,
  started,
}) => (
  <Card p={12} border="1px solid grey" width={1}>
    <Box mb={12}>
      <CustomButton onClick={started ? onStop : onStart} width={1}>
        {started ? 'Stop' : 'Start'}
      </CustomButton>
    </Box>
    <Box mb={12}>
      <CustomButton onClick={onClear} width={1}>
        Reset
      </CustomButton>
    </Box>
    <Card bg="lightgray" borderRadius={4} p="4px" mb={12}>
      <Text textAlign="center" color="gray">
        Step {step}
      </Text>
    </Card>
    <Box mb={12}>
      <Text mb="4px" fontSize={14}>
        Rows
      </Text>
      <NumberInput
        name="rows"
        type="number"
        value={rows}
        onChange={e => {
          onUpdateWorldSize(parseInt(e.target.value, 10), cols);
        }}
      />
    </Box>
    <Box mb={12}>
      <Text mb="4px" fontSize={14}>
        Columns
      </Text>
      <NumberInput
        name="cols"
        type="number"
        value={cols}
        onChange={e => {
          onUpdateWorldSize(rows, parseInt(e.target.value, 10));
        }}
      />
    </Box>
    <Box>
      <Text mb="4px" fontSize={14}>
        Speed
      </Text>
      <RangeInput
        name="speed"
        type="range"
        value={speed}
        onChange={e => {
          onUpdateSpeed(parseInt(e.target.value, 10));
        }}
        min="1"
        max="1001"
      />
    </Box>
  </Card>
);

Controls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onUpdateWorldSize: PropTypes.func.isRequired,
  onUpdateSpeed: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  started: PropTypes.bool.isRequired,
};

export default Controls;
