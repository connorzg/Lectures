import React from 'react';
import ReactDOM from 'react-dom';
import {Post} from './App';
import './index.css';

ReactDOM.render(
  <Post title='Not your Grandmothers Raspberry Pi' author='Connor Garber' body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." comments={['It was okay', 'flippin amazing', '10/10']} />,
  document.getElementById('root')
);
