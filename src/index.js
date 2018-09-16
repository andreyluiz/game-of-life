import React from 'react';
import { render } from 'react-dom';
import Simulator from './components/Simulator';
import './lib/interval';

const element = document.getElementById('app');
render(<Simulator />, element);
