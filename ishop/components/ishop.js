import React from 'react';
import PropTypes from 'prop-types';

import Product from './goods';

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
    };

    markItem = (id) => {
        this.setState({
            markedItem:id
        })
    };

    deleteItem = (id) => {
        this.setState({
            products: this.state.products.filter(e => {
                return e.code !== id
            })
        })
    };

    render() {
        let itemsList = this.state.products.map (el => {
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
                deleteItem = {this.deleteItem}
                selected = {this.state.markedItem}
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
                    <div className='ProductsList'>{table}</div>
               </div> 
    }
}

export default IShop;