var marketTitle = "Магазин фруктов, ягод и животных"
        var productsList = [
            {name: "apple", code:1, price: 25, url: "apple.jpg", left: 2000},
            {name: "pear", code:2, price: 35, url: "pear.jpg", left: 1000},
            {name: "pineapple", code:3, price: 55, url: "pineapple.jpg", left: 200},
            {name: "grape", code:4, price: 38, url: "grape.jpg", left: 1300},
            {name: "cat", code:5, price: 135, url: "cat.jpg", left: 20},
            {name: "dog", code:6, price: 25, url: "dog.jpg", left: 80}
        ];
        var component = React.createClass({
            displayName: 'IMarket',
            propTypes: {
                title: React.PropTypes.string.isRequired,
                products: React.PropTypes.arrayOf(
                    React.PropTypes.shape({
                        code: React.PropTypes.number.isRequired,
                        price: React.PropTypes.number.isRequired,
                        url: React.PropTypes.string.isRequired,
                        name: React.PropTypes.string.isRequired,
                        left: React.PropTypes.number.isRequired,
                    })
                ),
            },
            getInitialState: function() {
                return {
                    markedItem: null,   
                }
            },
            markItem: function(EO) {
                let clickedField = EO.target.parentNode,
                    [...tr] = document.getElementsByClassName('TableItem');
                    tr.forEach( e => {
                    e.style.background = "#fff";
                });
                console.log(clickedField)
                this.setState({
                    markedItem:clickedField.id
                });
                clickedField.style.background = "#ff0";
            },
            deleteItem: function(EO) {
                EO.target.parentNode.parentNode.parentNode.removeChild(EO.target.parentNode.parentNode)
            },
            render: function() {            
                var table = React.DOM.table({className: "Table"},
                    React.DOM.tbody(null,
                        React.DOM.tr({className: 'TableHeader'},
                            React.DOM.td({className:'TableHeaderName'}, "Name"),
                            React.DOM.td({className:'TableHeaderPrice'}, "Price"),
                            React.DOM.td({className:'TableHeaderPicture'}, 'Picture'),
                            React.DOM.td({className:'TableHeaderLeft'}, 'Left'),
                        ),
                        React.createElement(Apple, {className: "TableItem", markItem:this.markItem, deleteItem:this.deleteItem}),
                        React.createElement(Pear, {className: "TableItem", markItem:this.markItem, deleteItem:this.deleteItem}),
                        React.createElement(Pineapple, {className: "TableItem", markItem:this.markItem, deleteItem:this.deleteItem}),
                        React.createElement(AppleSeller, {className: "TableItem", markItem:this.markItem, deleteItem:this.deleteItem}),

                    ), 
                
                );

                
                return React.DOM.div({className: "MarketBlock"},
                React.DOM.h1({className: "MarketTitle"}, this.props.title),
                React.DOM.div({className: "ProductsList"}, table),
                );
                
            }
});
        ReactDOM.render(
            React.createElement(component, {title:marketTitle, products:productsList}),
            document.getElementById('container')
        );