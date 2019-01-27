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
            <button className={`ButtonAll ${this.props.filterMode === 1 ? "green" : ""}`} onClick={this.changeFilterMode} id={1}>All</button>
            <button className={`ButtonActive ${this.props.filterMode === 2 ? "green" : ""}`} onClick={this.changeFilterMode} id={2}>Active</button>
            <button className={`ButtonBlocked ${this.props.filterMode === 3 ? "green" : ""}`} onClick={this.changeFilterMode} id={3}>Blocked</button>
        </div>
        
    }
}

export {FilterClients};