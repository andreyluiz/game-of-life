import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Simulator from './components/Simulator';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif; 
  }
`;

ReactDOM.render(
  <React.Fragment>
    <Simulator />
    <GlobalStyles />
  </React.Fragment>,
  document.getElementById('root')
);
