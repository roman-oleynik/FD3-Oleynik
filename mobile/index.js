import React from 'react';
import ReactDOM from 'react-dom';
import MobileCompany from './components/ishop';
let clientsList = require('./productsList.json');


        
       
       
ReactDOM.render(
    <MobileCompany clients={clientsList} title='The Reactive Market' />,            
    document.getElementById('container')
);