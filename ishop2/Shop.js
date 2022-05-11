let Shop = React.createClass( {

    displayName: 'Shop',

    propTypes: {
        shop: React.PropTypes.string.isRequired,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.any,
                count: React.PropTypes.number,
            })
        ),
        // selectedProductCode: React.PropTypes.number.isRequired,
    },

    getInitialState: function(){
        return {
            selectedProductCode: null,
            products: [], 
        };
    },

    select: function(code){
        this.setState( {selectedProductCode:code} );
    },

    delete: function(code) {
        this.setState( {
            products: this.state.products.filter( product => product.code !== code )
        });
    },

    render: function() {

        let productsTable=this.props.productsOrig.map(product =>
            React.createElement(Product, 
                {key:product.code, title:product.title, price: product.price, url: product.url, count: product.count, 
                cbSelected:this.select, cbDeleted: this.delete,
                isSelected:(this.state.selectedProductCode===product.code),
            })
        );

        let headerTable= this.props.header.map(tit =>
            React.DOM.tr({className: 'Header', key: tit.code},
                React.DOM.th({className:'title'}, tit.title1),
                React.DOM.th({className:'price'}, tit.title2),
                React.DOM.th({className:'url'}, tit.title3), 
                React.DOM.th({className:'count'}, tit.title4),
                React.DOM.th({className:'button'},tit.button1),
            )
        );

        return React.DOM.div( {className: 'Shop'},
            React.DOM.div( {className:'shopName'}, this.props.shop ),
            React.DOM.table({className: 'tagTable'},
                React.DOM.thead({className: 'listTable'}, headerTable),
                React.DOM.tbody({className: 'listTable'}, productsTable),
            ),
        );
    }
}

)