"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

let FreeText="Hello";
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <Hello 
    deffreetext={FreeText}
    colors={colors}
  />
  , document.getElementById('container') 
);

