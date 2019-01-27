import React from 'react';
import {handler} from './events';

class FilterClients extends React.PureComponent {
    changeFilterMode = (EO) => {
        const ChangeFilter = "ChangeFilter";
        handler.emit(ChangeFilter, +EO.target.id);        
    }
    render() {
        // console.log('filterClients render')
        return <div className="FilterContainer">
            <button onClick={this.changeFilterMode} id={1}>All</button>
            <button onClick={this.changeFilterMode} id={2}>Active</button>
            <button onClick={this.changeFilterMode} id={3}>Blocked</button>
        </div>
        
    }
}

export {FilterClients};