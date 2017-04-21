import { createDuck } from 'redux-duck';
import { process } from './processing';
import { map, clone } from 'lodash'

const duck = createDuck('simulator', 'game-of-life');

const SIMULATION_START = duck.defineType('SIMULATION_START');
const SIMULATION_STOP = duck.defineType('SIMULATION_STOP');
const SIMULATION_STEP = duck.defineType('SIMULATION_STEP');
const TOGGLE_CELL = duck.defineType('TOGGLE_CELL');
const UPDATE_WORLD_SIZE = duck.defineType('UPDATE_WORLD_SIZE')
const UPDATE_SPEED = duck.defineType('UPDATE_SPEED');

const step = () =>
  (dispatch, getState) => {
    dispatch({ type: SIMULATION_STEP });
    const { speed } = getState().simulation;
    clearInterval(timer);
    timer = setInterval(() => dispatch(step()), (1000 - speed));
  }

let timer = null;

export const startSimulation = () =>
  (dispatch, getState) => {
    const { speed } = getState().simulation;
    clearInterval(timer);
    timer = setInterval(() => dispatch(step()), (1000 - speed));
    dispatch({ type: SIMULATION_START });
    dispatch(step());
  }

export const stopSimulation = () => {
  clearInterval(timer);
  return { type: SIMULATION_STOP };
}

export const toggleCell = duck.createAction(TOGGLE_CELL);

export const updateWorldSize = duck.createAction(UPDATE_WORLD_SIZE);

export const updateSpeed = duck.createAction(UPDATE_SPEED)

const initialState = {
  started: false,
  step: 0,
  rows: 0,
  columns: 0,
  speed: 500,
  world: [],
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
  [TOGGLE_CELL]: (state, { payload: { row, column } }) => {
    const currentValue = state.world[row][column];
    const newWorld = map(state.world, clone);
    let newValue = 0;
    if (currentValue === 0) {
      newValue = 1;
    }
    newWorld[row].splice(column, 1, newValue);
    return {
      ...state,
      world: newWorld,
    };
  },
  [UPDATE_WORLD_SIZE]: (state, { payload: { rows, columns }}) => ({
    ...state,
    rows,
    columns,
    world: new Array(rows).fill(new Array(columns).fill(0)),
  }),
  [UPDATE_SPEED]: (state, { payload }) => ({
    ...state,
    speed: payload,
  }),
}, initialState);
