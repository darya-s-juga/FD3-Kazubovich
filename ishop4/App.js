"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let nameShop='ishop';
let titleArr = [
    {code: 1, title1:'Name', title2: 'Price', title3: 'Picture', title4: 'Quantity', control: 'Control'}
];

let productsArr=require('./productsArr.json');

ReactDOM.render(
<Shop
  shop={nameShop}
  productsOrig={productsArr}
  header={titleArr}
  startWorkMode={0}
  />,
document.getElementById('container')
);


