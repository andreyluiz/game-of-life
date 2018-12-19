import { connect } from 'react-redux';
import { addRule, removeRule } from '../../lib/state';
import Rules from './Rules';

const mapStateToProps = state => ({
  rules: state.simulation.rules,
});

export default connect(
  mapStateToProps,
  { removeRule, addRule }
)(Rules);
