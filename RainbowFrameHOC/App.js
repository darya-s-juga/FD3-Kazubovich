"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import TextBlock from './components/TextBlock';

let anyText="в студеную зимнюю пору";
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let caption1="однажды"
let caption2="пору"

ReactDOM.render(
  <TextBlock 
    defanytext={anyText}
    colors={colors}
    startWorkMode={1}
    defcaption1={caption1}
    defcaption2={caption2}
  />
  , document.getElementById('container') 
);

