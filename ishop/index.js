import React from 'react';
import ReactDOM from 'react-dom';
import IShop from './components/ishop';
let productsList = require('./productsList.json');
        
       
       
ReactDOM.render(
    <IShop products={productsList} title='The Reactive Market' />,            
    document.getElementById('container')
);