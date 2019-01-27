import React from 'react';
import {handler} from './events';

class Client extends React.PureComponent {
    editItem = (EO) => {
        const EditItem = "EditItem";
        handler.emit(EditItem, this.props.id, this.props.companyMode); 
    }
    deleteItem = (EO) => {
        const DeleteItem = "DeleteItem";
        handler.emit(DeleteItem, this.props.id, this.props.companyMode); 
    }
    render() {
            console.log('Client '+ this.props.id +' render')
            return <tr className='ClientTableRow'>
                <td className='ClientLastName'>{this.props.lastname}</td>
                <td className='ClientFirstName'>{this.props.firstname}</td>
                <td className='ClientPatronym'>{this.props.patronym}</td>
                <td className='ClientBalance'>{this.props.balance}</td>
                <td className={`ClientStatus ${this.props.status === "Active" ? "green" : "red"}`}>{this.props.status}</td>
                <td><button className='ClientButtonEdit' disabled={this.props.workMode === 3 ? true : false} onClick={this.editItem}>Edit</button></td>
                <td><button className='ClientButtonDelete' onClick={this.deleteItem}>Delete</button></td>
            </tr>
    }
}

export {Client};