let ProductList = React.createClass( {
    
    displayName: 'ProductList',

    propTypes: {
        shop: React.PropTypes.string.isRequired,
        list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.any,
                count: React.PropTypes.number,
            })
        )
    },

    render: function() {
                //  let productsTable=[];
        // this.props.list.forEach(product => {
        //     let productTable=            
        //         React.DOM.tr( {key:product.code},
        //             React.DOM.td({className:'title'},product.title),
        //             React.DOM.td({className:'price'},product.price),
        //             React.DOM.td({className:'url'},
        //                 React.DOM.img({src: product.url}),
        //             ),
        //             React.DOM.td({className:'count'},product.count),
        //             )
        //     productsTable.push(productTable);
        // });

        let productsTable=this.props.list.map(product =>

            React.DOM.tr( {key:product.code},
                React.DOM.td({className:'title'},product.title),
                React.DOM.td({className:'price'},product.price),
                React.DOM.td({className:'url'},
                    React.DOM.img({src: product.url}),
                ),
                React.DOM.td({className:'count'},product.count),
                )
            )

        return React.DOM.div({className: 'ProductList'},
            React.DOM.div( {className:'shopName'}, this.props.shop ),
            React.DOM.table( {className:'tagTable'},
                React.DOM.tbody({className: 'listTable'}, productsTable ),
            ),
        );
    },
}

)