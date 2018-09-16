import {
  compose,
  withHandlers,
  withStateHandlers,
  withState,
  lifecycle
} from 'recompose';
import map from 'lodash/map';
import clone from 'lodash/clone';
import Simulator from './component';
import { World, nextWorld, initialWorld, buildNewWorld } from '../../lib/world';

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2);

const EnhancedSimulator = compose(
  withStateHandlers(
    {
      running: false,
      interval: null,
      step: 0,
      world: buildNewWorld(initialWorld.cols, initialWorld.rows),
      cols: initialWorld.cols,
      rows: initialWorld.rows,
      rules: [
        {
          id: generateId(),
          is: World.ALIVE,
          has: [2, 3],
          becomes: World.ALIVE
        },
        {
          id: generateId(),
          is: World.DEAD,
          has: [3],
          becomes: World.ALIVE
        }
      ]
    },
    {
      setRunning: () => running => ({ running }),
      setInterval: () => interval => ({ interval }),
      incrementStep: ({ step }) => () => ({ step: step + 1 }),
      setWorld: () => world => ({ world })
    }
  ),
  withHandlers({
    updateWorld: ({ incrementStep, world, rules, setWorld }) => () => {
      incrementStep();
      setWorld(nextWorld(world, rules));
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
    },
    onToggleCell: ({ world, setWorld }) => (row, col) => {
      const currentValue = world[row][col];
      world[row][col] = currentValue === 0 ? 1 : 0;
      setWorld(world);
    }
  })
)(Simulator);

export default EnhancedSimulator;
