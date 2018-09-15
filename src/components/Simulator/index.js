import { compose, withHandlers } from 'recompose';
import Simulator from './component';

const EnhancedSimulator = compose(
  withHandlers({
    onControlEvent: () => event => {
      console.log(event);
    }
  })
)(Simulator);

export default EnhancedSimulator;
