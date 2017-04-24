// @flow
import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as simulation } from './state';
import Simulator from './Simulator';

const rootReducer = combineReducers({
  simulation,
});

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, middlewares);

// @flow weak
type Props = {
  store: Object,
}

const App = ({
  store,
}: Props) => (
  <Provider store={store}>
    <Simulator />
  </Provider>
);

export default <App store={store} />;
