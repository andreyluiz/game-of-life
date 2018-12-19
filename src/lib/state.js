import { createDuck } from 'redux-duck';
import map from 'lodash/map';
import clone from 'lodash/clone';
import { nextWorld, initialWorld, buildNewWorld } from './world';

const ALIVE = 1;
const DEAD = 0;

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2);

const duck = createDuck('simulator', 'game-of-life');

const SIMULATION_START = duck.defineType('SIMULATION_START');
const SIMULATION_STOP = duck.defineType('SIMULATION_STOP');
const SIMULATION_CLEAR = duck.defineType('SIMULATION_CLEAR');
const SIMULATION_STEP = duck.defineType('SIMULATION_STEP');
const TOGGLE_CELL = duck.defineType('TOGGLE_CELL');
const UPDATE_WORLD_SIZE = duck.defineType('UPDATE_WORLD_SIZE');
const UPDATE_SPEED = duck.defineType('UPDATE_SPEED');
const ADD_RULE = duck.defineType('ADD_RULE');
const REMOVE_RULE = duck.defineType('REMOVE_RULE');

let timer = 0;

const step = () => (dispatch, getState) => {
  dispatch({ type: SIMULATION_STEP });
  const { speed } = getState().simulation;
  clearInterval(timer);
  timer = setInterval(() => dispatch(step()), 1000 - speed);
};

export const startSimulation = () => (dispatch, getState) => {
  const { speed } = getState().simulation;
  clearInterval(timer);
  timer = setInterval(() => dispatch(step()), 1000 - speed);
  dispatch({ type: SIMULATION_START });
  dispatch(step());
};

export const stopSimulation = () => {
  clearInterval(timer);
  return { type: SIMULATION_STOP };
};

export const clearSimulation = duck.createAction(SIMULATION_CLEAR);

export const toggleCell = duck.createAction(TOGGLE_CELL);

export const updateWorldSize = duck.createAction(UPDATE_WORLD_SIZE);

export const updateSpeed = duck.createAction(UPDATE_SPEED);

export const addRule = duck.createAction(ADD_RULE);

export const removeRule = duck.createAction(REMOVE_RULE);

const initialState = {
  started: false,
  step: 0,
  rows: initialWorld.rows,
  columns: initialWorld.cols,
  speed: 500,
  world: buildNewWorld(initialWorld.rows, initialWorld.cols),
  rules: [
    {
      id: generateId(),
      is: ALIVE,
      has: [2, 3],
      becomes: ALIVE,
    },
    {
      id: generateId(),
      is: DEAD,
      has: [3],
      becomes: ALIVE,
    },
  ],
};

export const reducer = duck.createReducer(
  {
    [SIMULATION_START]: state => ({
      ...state,
      started: true,
    }),
    [SIMULATION_STOP]: state => ({
      ...state,
      started: false,
    }),
    [SIMULATION_CLEAR]: state => ({
      ...state,
      world: buildNewWorld(state.rows, state.columns),
    }),
    [SIMULATION_STEP]: state => ({
      ...state,
      step: state.step + 1,
      world: nextWorld(state.world, state.rules),
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
    [UPDATE_WORLD_SIZE]: (state, { payload: { rows, columns } }) => ({
      ...state,
      rows,
      columns,
      world: buildNewWorld(rows, columns),
    }),
    [UPDATE_SPEED]: (state, { payload }) => ({
      ...state,
      speed: payload,
    }),
    [ADD_RULE]: (state, { payload }) => ({
      ...state,
      rules: [
        ...state.rules,
        {
          id: generateId(),
          is: parseInt(payload.is, 10),
          has: payload.has.filter(n => n).map(n => parseInt(n, 10)),
          becomes: parseInt(payload.becomes, 10),
        },
      ],
    }),
    [REMOVE_RULE]: (state, { payload }) => ({
      ...state,
      rules: state.rules.filter(r => r.id !== payload),
    }),
  },
  initialState
);
