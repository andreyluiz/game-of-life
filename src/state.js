import { createDuck } from 'redux-duck';
import { process } from './processing';
import clone from 'lodash/clone'

const duck = createDuck('simulator', 'game-of-life');

const SIMULATION_START = duck.defineType('SIMULATION_START');
const SIMULATION_STOP = duck.defineType('SIMULATION_STOP');
const SIMULATION_STEP = duck.defineType('SIMULATION_STEP');
const ALIVE_CELL = duck.defineType('ALIVE_CELL');

const step = duck.createAction(SIMULATION_STEP);

let timer = null;

export const startSimulation = () =>
  dispatch => {
    clearInterval(timer);
    timer = setInterval(() => dispatch(step()), 500);
    dispatch({ type: SIMULATION_START });
    dispatch(step());
  }

export const stopSimulation = () => {
  clearInterval(timer);
  return { type: SIMULATION_STOP };
}

export const aliveCell = duck.createAction(ALIVE_CELL);

const initialState = {
  started: false,
  step: 0,
  world:
    [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ],
};

export const reducer = duck.createReducer({
  [SIMULATION_START]: state => ({
    ...state,
    started: true,
  }),
  [SIMULATION_STOP]: state => ({
    ...state,
    started: false,
  }),
  [SIMULATION_STEP]: state => ({
    ...state,
    step: state.step + 1,
    world: process(state.world),
  }),
  [ALIVE_CELL]: (state, { payload: { row, column } }) => {
    const newWorld = clone(state.world);
    newWorld[row][column] = 1;
    return {
      ...state,
      world: newWorld,
    };
  },
}, initialState);
