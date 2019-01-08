import React from 'react';
import './newGood.css';

class Form extends React.Component {
    validateField = (EO) => {
        this.props.validateField(EO.target);
    };

    submitData = () => {
        this.props.submitData();
    };

    canselForm = () => {
        this.props.canselForm();
    };

    render() {
        
        return <div className='NewGoodForm'>
                    <div className='FormField FormFieldName'>
                        <input type='text' name='nameFieldValid' placeholder='Name' className='nameFieldValue' onChange={this.validateField}></input>
                        <div className='FormFieldNameMessage'>{this.props.nameFieldValid ? "" : "Please, fill in this field"}</div>
                    </div>
                    <div className='FormField FormFieldName'>
                        <input type='text' name='priceFieldValid' placeholder='Price' className='priceFieldValue' onChange={this.validateField}></input>
                        <div className='FormFieldNameMessage'>{this.props.priceFieldValid ? "" : "Please, fill in this field"}</div>
                    </div>
                    <div className='FormField FormFieldName'>
                        <input type='text' name='urlFieldValid' placeholder='pictureURL' className='urlFieldValue' onChange={this.validateField}></input>
                        <div className='FormFieldNameMessage'>{this.props.urlFieldValid ? "" : "Please, fill in this field"}</div>
                    </div>
                    <div className='FormField FormFieldName'>
                        <input type='text' name='leftFieldValid' placeholder='Left' className='leftFieldValue' onChange={this.validateField}></input>
                        <div className='FormFieldNameMessage'>{this.props.leftFieldValid ? "" : "Please, fill in this field"}</div>
                    </div>
                    <button className='SubmitButton' onClick={this.submitData}>Submit</button>
                    <button className='CancelButton' onClick={this.canselForm}>Cansel</button>
               </div>
    }
}

export default Form;