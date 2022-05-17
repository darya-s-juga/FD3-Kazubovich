let React = require('react');

require('./Product.css');

let Product = React.createClass( {

    displayName: 'Product',
  
    propTypes: {
        answers:React.PropTypes.arrayOf(
            React.PropTypes.shape({
              code: React.PropTypes.number.isRequired,
              count: React.PropTypes.number.isRequired,
              title: React.PropTypes.string.isRequired,
              cbSelected: React.PropTypes.func.isRequired,
              cbDeleted: React.PropTypes.func.isRequired,
              isSelected: React.PropTypes.bool,
            })
          ),
    },
  
      delete: function (eo) {
        eo.stopPropagation();
        if (this.props.cbDeleted)
            this.props.cbDeleted(this.props.code);
            console.log(this.props.code)
  
    },
  
    select: function (eo) {
      if (this.props.cbSelected)
          this.props.cbSelected(this.props.code);
          console.log(this.props.code)
  },
  
    render: function () {
  
      return React.DOM.tr( {className: this.props.isSelected?'selected':'normal', onClick:this.select, key:this.props.code },
            React.DOM.td( {className: 'str'}, this.props.title ),
            React.DOM.td( {className: 'str'}, this.props.price ),
            React.DOM.td( {className: 'ur'},
                React.DOM.img({src: this.props.url}),
            ),
            React.DOM.td( {className: 'str'}, this.props.count ),
            React.DOM.td( {className: 'button1'},
              React.DOM.input( {type:'button',value:'Delete', onClick:this.delete}),
            )
            )
    },
  });

  module.exports = Product;
  