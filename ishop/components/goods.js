import React from 'react';

class Product extends React.Component {
   prodMark = () => {
      this.props.markItem(this.props.id);
   }
   prodDel = () => {
      this.props.deleteItem(this.props.id);
   }
   render() {
      return <tr className={`TableItem${this.props.selected === this.props.id ? " selected" : null}`} id={this.props.id} onClick={this.prodMark}>
                  <td className='TableItemName'>{this.props.itemName}</td>
                  <td className='TableItemPrice'>{this.props.itemPrice}</td>
                  <td className='TableItemPicture'>
                     <img src={"img/"+this.props.pictureUrl}></img>
                  </td>
                  <td className='TableItemLeft'>{this.props.itemLeft}</td>
                  <td className='TableItemDelete'>
                     <button className='TableItemButton' onClick={this.prodDel}>Delete</button>
                  </td>
             </tr>
   }
}

export default Product;
