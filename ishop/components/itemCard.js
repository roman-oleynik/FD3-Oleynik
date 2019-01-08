import React from 'react';

class Card extends React.Component {
    render() {
        return this.props.selected === this.props.id && <div className='ProductCard'>
            <h3 className='ProductCardName'>{this.props.itemName}</h3>
            <img className='ProductCardPicture' src={'img/'+this.props.pictureUrl}></img>
            <p className='ProductCardPrice'>{this.props.itemPrice + ' BTC'}</p>
        </div>
    }
}

export default Card;