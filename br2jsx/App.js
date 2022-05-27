"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Text from './components/Text';

let textOrig="первый<br>второй<br/>третий<br />последний"

ReactDOM.render(
  <Text 
    text={textOrig}
  />
  , document.getElementById('container') 
);

