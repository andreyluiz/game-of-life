import { connect } from 'react-redux';
import {
  startSimulation,
  stopSimulation,
  clearSimulation,
  toggleCell,
  updateWorldSize,
  updateSpeed,
} from '../../lib/state';
import Controls from './Controls';

const mapStateToProps = ({
  simulation: { step, rows, columns, speed, started },
}) => ({
  step,
  rows,
  columns,
  speed,
  started,
});

const ControlsContainer = connect(
  mapStateToProps,
  {
    startSimulation,
    stopSimulation,
    clearSimulation,
    toggleCell,
    updateWorldSize,
    updateSpeed,
  }
)(Controls);

export default ControlsContainer;
