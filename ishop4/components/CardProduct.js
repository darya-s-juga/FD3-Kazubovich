import React  from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {

    static propTypes = {
      workMode: PropTypes.number.isRequired,
        products:PropTypes.arrayOf(
          PropTypes.shape({
            code: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            url: PropTypes.string,
            cbSelected: PropTypes.func.isRequired,
            cbDeleted: PropTypes.func.isRequired,
            cbCancel: PropTypes.func.isRequired,
            isSelected: PropTypes.bool,
          })
        ),
      };

    state = {
      idOrig: this.props.code,
      nameOrig: this.props.title,
      priceOrig: this.props.price,
      urlOrig: this.props.url,
      quantityOrig: this.props.count
    }
      
    save = () => {
      if (this.props.cbSave)
      this.props.cbSave();
    } 

    cancel = () => {
      if (this.props.cbCancel)
      this.props.cbCancel();
    }

    idChanged = (EO) => {
      this.props.cbSave(EO.target.value);  
    }

    render() {
      if ( this.props.workMode== 1 ) {
        return (
          <div key={this.props.code} code = {this.props.code}>
            <h1>{this.props.title}</h1>
            <p>"ID:" {this.props.code}</p>
            <p>"Name:" {this.props.title}</p>
            <p>"Price:" {this.props.price}</p>
            <p>"URL:" {this.props.url}</p>
            <p>"Quantity:" {this.props.count}</p>
          </div>
      )
      }
      else {
        return (
          <div key={this.props.code} code = {this.props.code}>
            <h1>{this.props.title}</h1>
            <div><label>ID:</label>   <input type='text' defaultValue={this.state.idOrig} /*  onChange={this.idChanged}*/ name='id'></input></div>
            <div><label>Name:</label>   <input type='text' defaultValue={this.state.nameOrig} /*  onChange={this.titleChanged}*/ name='title'></input></div>
            <div><label>Price:</label>   <input type='text' defaultValue={this.state.priceOrig}  /* onChange={this.priceChanged}*/ name='cost'></input></div>
            <div><label>URL:"</label>   <input type='text' defaultValue={this.state.urlOrig}  /* onChange={this.urlChanged}*/ name='url'></input></div>
            <div><label>Quantity:</label>   <input type='text' defaultValue={this.state.quantityOrig} /* onChange={this.countChanged}*/ name='count'></input></div>
            <div className='changeProduct'>
              <input type = 'button' value= 'Save'  onClick= {this.save}/>
              <input type = 'button' value= 'Cancel'  onClick= {this.cancel}/>
            </div>
        </div>
        );
      }
    }

}
export default CardProduct;
