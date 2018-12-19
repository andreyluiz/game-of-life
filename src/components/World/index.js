import { connect } from 'react-redux';
import { toggleCell } from '../../lib/state';
import World from './World';

const mapStateToProps = state => ({
  world: state.simulation.world,
});

export default connect(
  mapStateToProps,
  { toggleCell }
)(World);
