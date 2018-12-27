const Product = React.createClass({
   displayName: "Product",

   prodMark: function() {
      this.props.markItem(this.props.id)
   },
   prodDel: function() {
      this.props.deleteItem(this.props.id)
   },
   render: function () {
      return React.DOM.tr({className: `TableItem${!!this.props.selected && this.props.selected === this.props.id ? " selected" : null}`, id: this.props.id, onClick:this.prodMark},
            React.DOM.td({className:'TableItemName'}, this.props.itemName),
            React.DOM.td({className:'TableItemPrice'}, this.props.itemPrice),
            React.DOM.td({className:'TableItemPicture'}, 
               React.DOM.img({src:"img/" + this.props.pictureUrl})
            ),
            React.DOM.td({className:'TableItemLeft'}, this.props.itemLeft),
            React.DOM.td({className:'TableItemDelete'}, 
               React.DOM.button({className: "TableItemButton", onClick:this.prodDel}, "Delete")
            ),
      );
   }
});