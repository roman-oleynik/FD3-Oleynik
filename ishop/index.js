import React from 'react';
import ReactDOM from 'react-dom';
import IShop from './components/ishop';
let productsList = require('./productsList.json');
        
       
       
ReactDOM.render(
    <IShop products={productsList} title='Магазин фруктов, ягод и животных' />,            
    document.getElementById('container')
);