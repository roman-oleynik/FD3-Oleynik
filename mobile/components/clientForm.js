import React from 'react';
import {handler} from './events';

class ClientForm extends React.PureComponent {
    state = {
        lastnameInputValue: "", 
    }
    changeLastNameRef = (ref) => {
        const ChangeLastNameRef = "ChangeLastNameRef";
        handler.emit(ChangeLastNameRef, ref);
    }
    changeFirstNameRef = (ref) => {
        const ChangeFirstNameRef = "ChangeFirstNameRef";
        handler.emit(ChangeFirstNameRef, ref);
    }
    changePatronymRef = (ref) => {
        const ChangePatronymRef = "ChangePatronymRef";
        handler.emit(ChangePatronymRef, ref);
    }
    changeBalanceRef = (ref) => {
        const ChangeBalanceRef = "ChangeBalanceRef";
        handler.emit(ChangeBalanceRef, ref);
    }

    submitData = () => {
        const SubmitData = "SubmitData";
        handler.emit(SubmitData, this.props.id, this.props.companyMode); 
    }

    canselForm = () => {
        const CanselForm = "CanselForm";
        handler.emit(CanselForm, this.props.id, this.props.companyMode);
    }

    render() {
        // console.log('clientForm render')
        return <div className='ClientForm'>
            <input type='text' defaultValue={(this.props.workMode === 3 && this.props.companyMode === 1) ? this.props.velcomClients[+this.props.editedItem].lastname : (this.props.workMode === 3 && this.props.companyMode === 2) ? this.props.mtsClients[+this.props.editedItem].lastname : "" } className='ClientInput ClientInputLastname' placeholder="LastName" ref={this.changeLastNameRef}/>
            <input type='text' defaultValue={(this.props.workMode === 3 && this.props.companyMode === 1) ? this.props.velcomClients[+this.props.editedItem].firstname : (this.props.workMode === 3 && this.props.companyMode === 2) ? this.props.mtsClients[+this.props.editedItem].firstname : "" } className='ClientInput ClientInputFirstname' placeholder="FirstName" ref={this.changeFirstNameRef}/>
            <input type='text' defaultValue={(this.props.workMode === 3 && this.props.companyMode === 1) ? this.props.velcomClients[+this.props.editedItem].patronym : (this.props.workMode === 3 && this.props.companyMode === 2) ? this.props.mtsClients[+this.props.editedItem].patronym : "" } className='ClientInput ClientInputPatronym' placeholder="Patronym" ref={this.changePatronymRef}/>
            <input type='text' defaultValue={(this.props.workMode === 3 && this.props.companyMode === 1) ? this.props.velcomClients[+this.props.editedItem].balance : (this.props.workMode === 3 && this.props.companyMode === 2) ? this.props.mtsClients[+this.props.editedItem].balance : "" } className='ClientInput ClientInputBalance' placeholder="Balance" ref={this.changeBalanceRef}/>
            <input type='button' defaultValue='Submit' onClick={this.submitData} />
            <input type='button' defaultValue='Cansel' onClick={this.canselForm} />
        </div>
    }
}

export {ClientForm};