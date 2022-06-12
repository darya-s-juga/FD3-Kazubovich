import React  from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

import {FormErrors} from './FormErrors';

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
            cbSaveChanges: PropTypes.func.isRequired,
            isSelected: PropTypes.bool,
          })
        ),
      };

    state = {
      nameOrig: this.props.title,
      priceOrig: this.props.price,
      urlOrig: this.props.url,
      quantityOrig: this.props.count,
      newPropertyArr: [],
      formErrors: {'nameOrig': '', 'priceOrig': '', 'urlOrig': '', 'quantityOrig': ''},
      nameOrigValid: true,
      priceOrigValid: true,
      urlOrigValid: true,
      quantityOrigValid: true,
      formValid: true,
    };
      
    save = () => {
      
      this.state.newPropertyArr.push({'code':this.props.code, "title":this.state.nameOrig,
      'price':this.state.priceOrig,'url': this.state.urlOrig,'count':this.state.quantityOrig});
      console.log(this.state.newPropertyArr)
      if (this.props.cbSaveChanges) 
      this.props.cbSaveChanges(this.props.code, this.state.newPropertyArr);
    };

    cancel = () => {
      if (this.props.cbCancel)
      this. setState(      {nameOrig: this.props.title,
        priceOrig: this.props.price,
        urlOrig: this.props.url,
        quantityOrig: this.props.count} )
      this.props.cbCancel();
      
    };

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let nameOrigValid=this.state.nameOrigValid;
      let priceOrigValid=this.state.priceOrigValid;
      let urlOrigValid=this.state.urlOrigValid;
      let quantityOrigValid=this.state.quantityOrigValid;

      switch(fieldName) {
        case 'nameOrig':
          nameOrigValid = value.length >= 10;
          fieldValidationErrors.nameOrig = nameOrigValid? '': 'is too short';
        break;
        case 'priceOrig':
          priceOrigValid = value.length >= 1;
          fieldValidationErrors.priceOrig = priceOrigValid? '': 'is too short';
        break;
        case 'urlOrig':
          urlOrigValid = value.length >= 10;
          fieldValidationErrors.urlOrig = urlOrigValid? '': 'is too short';
        break;
        case 'quantityOrig':
          quantityOrigValid = value.length >= 1;
          fieldValidationErrors.quantityOrig = quantityOrigValid? '': 'is too short';
        break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        nameOrigValid: nameOrigValid,
        priceOrigValid: priceOrigValid,
        urlOrigValid: urlOrigValid,
        quantityOrigValid: quantityOrigValid,
      }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.nameOrigValid && this.state.priceOrigValid
        && this.state.urlOrigValid && this.state.quantityOrigValid});
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
            <p>"ID:" {this.props.code}</p>
            <div><label>Name:</label>   <input type='text' name='nameOrig' defaultValue={this.state.nameOrig}  onChange={this.handleUserInput}></input><FormErrors formErrors={this.state.formErrors} key={1}></FormErrors></div>
            <div><label>Price:</label>   <input type='text' name='priceOrig' defaultValue={this.state.priceOrig}  onChange={this.handleUserInput}></input><FormErrors formErrors={this.state.formErrors} key={2}></FormErrors></div>
            <div><label>URL:"</label>   <input type='text' name='urlOrig' defaultValue={this.state.urlOrig}  onChange={this.handleUserInput}></input><FormErrors formErrors={this.state.formErrors} key={3}></FormErrors></div>
            <div><label>Quantity:</label>   <input type='text' name='quantityOrig' defaultValue={this.state.quantityOrig} onChange={this.handleUserInput}></input><FormErrors formErrors={this.state.formErrors} key={4}></FormErrors></div>
            <div className='changeProduct'>
              <input type = 'button' value= 'Save'  onClick= {this.save} disabled={!this.state.formValid}/>
              <input type = 'button' value= 'Cancel'  onClick= {this.cancel}/>
            </div>
        </div>
        );
      }
    }

}
export default CardProduct;
