import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

import Product from './goods';
import Card from './itemCard';
import Form from './newGood';

class IShop extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                left: PropTypes.number.isRequired,
            })
        ),
    };

    state = {
        products: this.props.products,
        markedItem: null,
        editedItem: null,
        buttonSubmitDisabled: true,
        appMode: 1,
        nameFieldValid: false,
        priceFieldValid: false,
        urlFieldValid: false,
        leftFieldValid: false,
        nameFieldValue: '',
        priceFieldValue: '',
        urlFieldValue: '',
        leftFieldValue: '',
    };

    markItem = (id) => {
        this.setState({
            markedItem:id,
            nameFieldValue: '',
            priceFieldValue: '',
            urlFieldValue: '',
            leftFieldValue: '',
        })
    };


    addNewItem = () => {
        this.setState({
            appMode:2
        })
    };

    editItem = (id, i) => {
        this.setState({
            markedItem:id,
            appMode: 3,
            editedItem: id,
            nameFieldValue: this.state.products[i].name,
            priceFieldValue: this.state.products[i].price,
            urlFieldValue: this.state.products[i].url,
            leftFieldValue: this.state.products[i].left,
            nameFieldValid: true,
            priceFieldValid: true,
            urlFieldValid: true,
            leftFieldValid: true,
            buttonSubmitDisabled: false,
        });
    };

    deleteItem = (id) => {
        
        const conf = confirm('Do you really want to delete this item?');
        if (conf) {
            this.setState({
                products: this.state.products.filter(e => {
                    return e.code !== id
                })
            })
        }
    };

    validateField = (target) => {
        let inputName = target.name;
        let inputClassName = target.className;
        let inputValue = target.value;
        this.setState({
            [inputClassName]: inputValue
        });
        inputValue !== ""
        ?
        this.setState({
            [inputName] : true,
        }) 
        :
        this.setState({
            [inputName] : false
        });
        

        
        
        
    };

    

    submitData = () => {
        if(this.state.appMode === 2 && this.state.nameFieldValid && this.state.priceFieldValid &&
            this.state.urlFieldValid && this.state.leftFieldValid) {
                this.state.products.push({name: this.state.nameFieldValue, code: this.state.products.length+1, 
                    price: this.state.priceFieldValue, url: this.state.urlFieldValue, 
                    left: this.state.leftFieldValue});
            this.setState({
                appMode: 1,
                nameFieldValid: false,
                priceFieldValid: false,
                urlFieldValid: false,
                leftFieldValid: false,
                nameFieldValue: '',
                priceFieldValue: '',
                urlFieldValue: '',
                leftFieldValue: '',
                markedItem: null,
                buttonSubmitDisabled:true,
            })
        }
        else if (this.state.appMode === 3 && this.state.nameFieldValid && this.state.priceFieldValid &&
            this.state.urlFieldValid && this.state.leftFieldValid) {
                this.setState({
                    products: this.state.products.map( el => {
                        if (el.code === this.state.editedItem) {
                            return {
                                name: this.state.nameFieldValue,
                                code: this.state.editedItem,
                                price: +this.state.priceFieldValue,
                                url: this.state.urlFieldValue,
                                left: +this.state.leftFieldValue
                            }

                        } else {
                            return el;
                        }
                        
                        
                    }),
                    appMode: 1,
                    nameFieldValid: false,
                    priceFieldValid: false,
                    urlFieldValid: false,
                    leftFieldValid: false,
                    nameFieldValue: '',
                    priceFieldValue: '',
                    urlFieldValue: '',
                    leftFieldValue: '',
                    markedItem: null,
                    buttonSubmitDisabled:true,
                })
        }
                 
        
    };

    canselForm = () => {
        this.setState({
            appMode: 1,
            nameFieldValid: false,
            priceFieldValid: false,
            urlFieldValid: false,
            leftFieldValid: false,
            nameFieldValue: '',
            priceFieldValue: '',
            urlFieldValue: '',
            leftFieldValue: '',
            buttonSubmitDisabled: true,
        })
    };
    
    render() {
        let itemsList = this.state.products.map ((el, i) => {
            return <Product
                className = "TableItem" 
                itemName = {el.name}
                key = {el.code}
                id = {el.code}
                itemLeft = {el.left}
                itemPrice = {el.price}
                pictureUrl = {el.url}
                products = {this.props.products}
                markItem = {this.markItem}
                editItem = {this.editItem}
                deleteItem = {this.deleteItem}
                selected = {this.state.markedItem}
                appMode = {this.state.appMode}
                arrayIndex = {i}
                
            />
        });
        let table = <table className='Table'>
                        <tbody>
                            <tr className='TableHeader'>
                                <td className='TableHeaderName'>Name</td>
                                <td className='TableHeaderPrice'>Price</td>
                                <td className='TableHeaderPicture'>Picture</td>
                                <td className='TableHeaderLeft'>Left</td>
                            </tr>
                            {itemsList}
                        </tbody>
                    </table>
        
        return <div className='MarketBlock'>
                    <h1 className='MarketTitle'>{this.props.title}</h1>
                    <div className='AppContainer'>
                        <div className='ProductsListAndButton'>
                            <div className='ProductsList'>{table}</div>
                            <button className='NewLI' onClick={this.addNewItem}>Click to add new list item</button>
                        </div>
                        <div className='CardAndFormBlock'>
                            <div className='CardBlock'>
                            {this.state.appMode === 1 && this.state.products.map( el => {
                                return <Card 
                                    itemName = {el.name}
                                    key = {el.code}
                                    id = {el.code}
                                    itemLeft = {el.left}
                                    itemPrice = {el.price}
                                    pictureUrl = {el.url}
                                    products = {this.props.products}
                                    markItem = {this.markItem}
                                    selected = {this.state.markedItem}
                                />
                            })}
                            </div>
                            <div className='FormBlock'>
                                {this.state.appMode === 2 &&
                                    <Form 
                                        nameFieldValid = {this.state.nameFieldValid}
                                        priceFieldValid = {this.state.priceFieldValid}
                                        urlFieldValid = {this.state.urlFieldValid}
                                        leftFieldValid = {this.state.leftFieldValid}
                                        nameFieldValue = {this.state.nameFieldValue}
                                        priceFieldValue = {this.state.priceFieldValue}
                                        urlFieldValue = {this.state.urlFieldValue}
                                        leftFieldValue = {this.state.leftFieldValue}
                                        validateField = {this.validateField}
                                        products = {this.props.products} 
                                        selected = {this.state.markedItem}
                                        appMode = {this.state.appMode}
                                        submitData = {this.submitData}
                                        canselForm = {this.canselForm}
                                        disabled = {this.state.buttonSubmitDisabled}
                                    />
                                    }
                                    {this.state.appMode === 3 &&
                                    <Form 
                                        nameFieldValid = {this.state.nameFieldValid}
                                        priceFieldValid = {this.state.priceFieldValid}
                                        urlFieldValid = {this.state.urlFieldValid}
                                        leftFieldValid = {this.state.leftFieldValid}
                                        nameFieldValue = {this.state.nameFieldValue}
                                        priceFieldValue = {this.state.priceFieldValue}
                                        urlFieldValue = {this.state.urlFieldValue}
                                        leftFieldValue = {this.state.leftFieldValue}
                                        validateField = {this.validateField}
                                        products = {this.props.products} 
                                        selected = {this.state.markedItem}
                                        editedItem = {this.state.editedItem}
                                        appMode = {this.state.appMode}
                                        submitData = {this.submitData}
                                        canselForm = {this.canselForm}
                                        disabled = {this.state.buttonSubmitDisabled}
                                    />
                                    }
                            </div>
                        </div>
                    </div>
               </div> 
    }
}

export default IShop;