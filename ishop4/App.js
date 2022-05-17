"use strict";

let React = require('react');
let ReactDOM = require('react-dom');

let Shop= require('./components/Shop');

let nameShop='ishop';
let titleArr = [
    {code: 1, title1:'title', title2: 'cost', title3: 'picture', title4: 'count', button1: 'delete product'}
];

let productsArr= [
{title: 'charger', code: 2, price: 100, url: './images/charger.jpg', count: 100, delete: 'Delete'},
{title: 'headphones', code: 3, price: 200, url: './images/ethetnet_hub.jpg', count: 200, delete: 'Delete'},
{title: 'ethernet hub', code: 4, price: 300, url: './images/headphones.jpg', count: 300, delete: 'Delete'},
];



ReactDOM.render(
React.createElement(Shop, {shop:nameShop, productsOrig: productsArr, header: titleArr}),
document.getElementById('container')
);