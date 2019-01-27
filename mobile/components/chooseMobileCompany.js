import React from 'react';
import {handler} from './events';

class ChooseMobileCompany extends React.PureComponent {
    changeMode = (EO) => {
        // if (+EO.target.id === this.props.companyMode) {
            const ChangeCompany = "ChangeCompany";
            handler.emit(ChangeCompany, +EO.target.id);
        // }
        
    }
    render() {
        // console.log('Velcom MTS render');
        return <div className="ButtonsContainer">
            <button onClick={this.changeMode} id={1}>Velcom</button>
            <button onClick={this.changeMode} id={2}>MTS</button>
        </div>
        
    }
}

export {ChooseMobileCompany};