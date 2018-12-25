const Product = React.createClass({
   displayName: "Product",
   render: function () {
      return React.DOM.tr({className: 'TableItem', id: this.props.id, onClick:this.props.markItem},
            React.DOM.td({className:'TableItemName'}, this.props.itemName),
            React.DOM.td({className:'TableItemPrice'}, this.props.itemPrice),
            React.DOM.td({className:'TableItemPicture'}, 
               React.DOM.img({src:"img/" + this.props.pictureUrl})
            ),
            React.DOM.td({className:'TableItemLeft'}, this.props.itemLeft),
            React.DOM.td({className:'TableItemDelete'}, 
               React.DOM.button({className: "TableItemButton", onClick:this.props.deleteItem}, "Delete")
            ),
      );
   }
});