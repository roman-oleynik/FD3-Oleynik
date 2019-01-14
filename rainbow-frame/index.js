import React from 'react'
import ReactDOM from 'react-dom'

import RainbowFrame from './components/rframe';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
    <RainbowFrame colors={colors}>
        <h3 style={{margin:0}}>Hello!</h3>
    </RainbowFrame>,
    document.getElementById('container')
)
