import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as simulation } from './state';
import App from './App';

const rootReducer = combineReducers({
  simulation,
});

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
