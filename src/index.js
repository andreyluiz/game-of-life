import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './processing.js';

const input = 
  [ [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0] ];

ReactDOM.render(
  <App world={input} />,
  document.getElementById('app'),
);
