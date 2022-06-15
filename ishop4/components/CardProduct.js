import React  from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {

  static propTypes = {
    add: PropTypes.bool.isRequired,
    workMode: PropTypes.number.isRequired,
    product: PropTypes.object.isRequired,
    products:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
    cbSelected: PropTypes.func.isRequired,
    cbDeleted: PropTypes.func.isRequired,
    cbCancel: PropTypes.func.isRequired,
    cbSaveChanges: PropTypes.func.isRequired,
    isSelected: PropTypes.bool, 
    })
    ),
  };

  state = {
    nameOrig: this.props.product.title,
    priceOrig: this.props.product.price,
    urlOrig: this.props.product.url,
    quantityOrig: this.props.product.count,
    nameOrigError: this.props.add,
    priceOrigError: this.props.add,
    urlOrigError: this.props.add,
    quantityOrigError: this.props.add,
  };
      
  save = (e) => {  
    if (this.props.cbSaveChanges){
      if (e.target.value=='Save') {
        this.props.cbSaveChanges({...this.props.product, title:this.state.nameOrig,
          price:this.state.priceOrig,url: this.state.urlOrig,count:this.state.quantityOrig});
      }
      else {
        this.props.cbSaveChanges({...this.props.product, code:this.props.product.code, title:this.state.nameOrig,
          price:this.state.priceOrig,url: this.state.urlOrig,count:this.state.quantityOrig});
      }
    }  
  };

  cancel = () => {
    if (this.props.cbCancel)
      this.props.cbCancel();  
  };

  handleUserInput = (e) => {
    this.props.cbOnChange();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => {
              if(e.target.value=='') {
                this.validateField(name, true);
              } else {
                this.validateField(name, false);
              }
            });

  };

  validateField(fieldName, error) {
    switch(fieldName) {
      case 'nameOrig':
        this.setState({nameOrigError: error});
      break;
      case 'priceOrig':
        this.setState({priceOrigError: error});
      break;
      case 'urlOrig':
        this.setState({urlOrigError: error});
      break;
      case 'quantityOrig':
        this.setState({quantityOrigError: error});
      break;
      default:
        break;
    }
  };

  render() {
    if ( this.props.workMode== 1 ) {
      return (
        <div code = {this.props.product.code}>
          <h1>{this.props.product.title}</h1>
          <p>ID: {this.props.product.code}</p>
          <p>Name: {this.props.product.title}</p>
          <p>Price: {this.props.product.price}</p>
          <p>URL: {this.props.product.url}</p>
          <p>Quantity: {this.props.product.count}</p>
        </div>
      )
    }
    else {
      if ( this.props.workMode== 2) {
        return (
          <div code = {this.props.add? this.props.key : this.props.product.code}>
            <h1>{this.props.add?"Add new product":"Edit Existing Product"}</h1>
            <p>"ID:" {this.props.product.code}</p>
            <div>
              <label>Name:</label>
              <input type='text' name='nameOrig' defaultValue={this.props.add?'': this.state.nameOrig}  onChange={this.handleUserInput}></input>
              <span className='error' hidden={!this.state.nameOrigError}>Введите название товара!</span>
            </div>
            <div>
              <label>Price:</label>
              <input type='text' name='priceOrig' defaultValue={this.props.add?'':this.state.priceOrig}  onChange={this.handleUserInput}></input>
              <span className='error' hidden={!this.state.priceOrigError}>Значение должно быть числом больше 0!</span>
            </div>
            <div>
              <label>URL:</label>
              <input type='text' name='urlOrig' defaultValue={this.props.add?'':this.state.urlOrig}  onChange={this.handleUserInput}></input>
              <span className='error' hidden={!this.state.urlOrigError}>Значение должно быть допустимым URL!</span>
            </div>
            <div>
              <label>Quantity:</label>
              <input type='text' name='quantityOrig' defaultValue={this.props.add?'':this.state.quantityOrig} onChange={this.handleUserInput}></input>
              <span className='error' hidden={!this.state.quantityOrigError}>Значение должно быть положительным числом!</span>
            </div>
            <div className='changeProduct'>
              <input type = 'button' value= {this.props.add?"Add":"Save"}  onClick= {this.save}
                     disabled={(this.state.nameOrigError || this.state.priceOrigError || 
                                this.state.urlOrigError || this.state.quantityOrigError)}/>
              <input type = 'button' value= 'Cancel'  onClick= {this.cancel}/>
            </div>
          </div>
        );
      }
      
    }
  }
};

export default CardProduct;
