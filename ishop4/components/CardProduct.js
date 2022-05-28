import React  from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {

    static propTypes = {
        products:PropTypes.arrayOf(
          PropTypes.shape({
            code: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            cbSelected: PropTypes.func.isRequired,
            cbDeleted: PropTypes.func.isRequired,
            isSelected: PropTypes.bool,
          })
        ),
      };

    render() {
        return (
            <div key={this.props.code} code = {this.props.code}>
            <h1>{this.props.title}</h1>
            <p>"Name:" {this.props.title}</p>
            <p>"Price:" {this.props.price}</p>
        </div>
        )
    }

}
export default CardProduct;
