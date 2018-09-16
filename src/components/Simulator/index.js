import { compose, withHandlers, withStateHandlers, withState } from 'recompose';
import Simulator from './component';

const EnhancedSimulator = compose(
  withStateHandlers(
    { running: false, interval: null, step: 0 },
    {
      setRunning: () => running => ({ running }),
      setInterval: () => interval => ({ interval }),
      incrementStep: ({ step }) => () => ({ step: step + 1 })
    }
  ),
  withHandlers({
    updateWorld: ({ incrementStep }) => () => {
      incrementStep();
    }
  }),
  withHandlers({
    startSimulation: ({
      interval,
      updateWorld,
      setInterval,
      setRunning
    }) => () => {
      if (interval) interval.clear();
      setInterval(window.rInterval(updateWorld, 250));
      setRunning(true);
    },
    stopSimulation: ({ interval, setInterval, setRunning }) => () => {
      if (interval) interval.clear();
      setInterval(null);
      setRunning(false);
    }
  }),
  withHandlers({
    onControlEvent: props => event => {
      /* eslint-disable indent */
      switch (event) {
        case 'play':
          props.startSimulation();
          break;
        case 'pause':
          props.stopSimulation();
          break;
        default:
          break;
      }
      /* eslint-enable */
    }
  })
)(Simulator);

export default EnhancedSimulator;
