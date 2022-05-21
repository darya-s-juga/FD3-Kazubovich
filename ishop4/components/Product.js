import React  from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

    // displayName: 'Product',
  
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
  
    delete = (eo) => {
    eo.stopPropagation();
      if (this.props.cbDeleted)
        this.props.cbDeleted(this.props.code);
        console.log(this.props.code)
    }
  
    select = (eo) => {
      if (this.props.cbSelected)
          this.props.cbSelected(this.props.code);
          console.log(this.props.code)
  }
  
    render() {
      return (     
        <tr className = {this.props.isSelected?'selected':'normal'} onClick= {this.select} key= {this.props.code}>
          <td className = 'str'> {this.props.title}</td>
          <td className = 'str'> {this.props.price}</td>
          <td className = 'url'>
            <img src = {this.props.url}/>
          </td>
          <td className='str'> {this.props.count}</td>
          <td className ='button'>
            <input type = 'button' value= 'Edit'  onClick= {this.edit}/>
            <input type = 'button' value= 'Delete'  onClick= {this.delete}/>
          </td>
        </tr>
    )
    }
  };

  export default Product;
  