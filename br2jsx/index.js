import React from 'react'
import ReactDOM from 'react-dom'

import Parser from './components/br2';

let text="первый<br>второй<br/>третий<br />последний";
  

ReactDOM.render(
    <Parser text={text}/>,
    document.getElementById('container')
)
