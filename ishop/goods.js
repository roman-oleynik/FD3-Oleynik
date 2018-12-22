const Apple = React.createClass({
    displayName: "Apple",
    render: function() {
       return React.DOM.tr({key: 1, className: 'TableItem', id: 1, onClick:this.props.markItem},
                             React.DOM.td({className:'TableItemName'}, "Apple"),
                             React.DOM.td({className:'TableItemPrice'}, 200),
                             React.DOM.td({className:'TableItemPicture'}, 
                                React.DOM.img({src:"img/apple.jpg"})
                         ),
                             React.DOM.td({className:'TableItemLeft'}, 1000),
                             React.DOM.td({className:'TableItemDelete'}, 
                                React.DOM.button({className: "TableItemButton", onClick:this.props.deleteItem}, "Delete")
                             ),
                        );
    }
});
const Pear = React.createClass({
    displayName: "Pear",
    render: function() {
       return React.DOM.tr({key: 2, className: 'TableItem', id: 2, onClick:this.props.markItem},
                             React.DOM.td({className:'TableItemName'}, "Pear"),
                             React.DOM.td({className:'TableItemPrice'}, 300),
                             React.DOM.td({className:'TableItemPicture'}, 
                                React.DOM.img({src:"img/pear.jpg"})
                         ),
                             React.DOM.td({className:'TableItemLeft'}, 800),
                             React.DOM.td({className:'TableItemDelete'}, 
                                React.DOM.button({className: "TableItemButton", onClick:this.props.deleteItem}, "Delete")
                             ),
                        );
    }
});
const Pineapple = React.createClass({
    displayName: "Pineapple",
    render: function() {
       return React.DOM.tr({key: 3, className: 'TableItem', id: 3, onClick:this.props.markItem},
                             React.DOM.td({className:'TableItemName'}, "Pineapple"),
                             React.DOM.td({className:'TableItemPrice'}, 400),
                             React.DOM.td({className:'TableItemPicture'}, 
                                React.DOM.img({src:"img/pineapple.jpg"})
                         ),
                             React.DOM.td({className:'TableItemLeft'}, 1200),
                             React.DOM.td({className:'TableItemDelete'}, 
                                React.DOM.button({className: "TableItemButton", onClick:this.props.deleteItem}, "Delete")
                             ),
                        );
    }
});
const AppleSeller = React.createClass({
    displayName: "AppleSeller",
    render: function() {
       return React.DOM.tr({key: 4, className: 'TableItem', id: 4, onClick:this.props.markItem},
                             React.DOM.td({className:'TableItemName'}, "Apple Seller"),
                             React.DOM.td({className:'TableItemPrice'}, 1200),
                             React.DOM.td({className:'TableItemPicture'}, 
                                React.DOM.img({src:"img/apple-seller.gif"})
                         ),
                             React.DOM.td({className:'TableItemLeft'}, 8),
                             React.DOM.td({className:'TableItemDelete'}, 
                                React.DOM.button({className: "TableItemButton", onClick:this.props.deleteItem}, "Delete")
                             ),
                        );
    }
});