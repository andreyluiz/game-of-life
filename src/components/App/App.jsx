import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as simulation } from '../../lib/state';
import Simulator from '../Simulator/Simulator';
import './App.css';

const rootReducer = combineReducers({
  simulation,
});

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, middlewares);

const App = () => (
  <Provider store={store}>
    <Simulator />
  </Provider>
);

export default App;
