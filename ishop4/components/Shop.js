import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import CardProduct from './CardProduct';

class Shop extends React.Component {

    // displayName: 'Shop',

    static propTypes = {
        shop: PropTypes.string.isRequired,
        header: PropTypes.array.isRequired,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.any,
                count: PropTypes.number,
            })
        ),
    };

    state = {
        selectedProductCode: null,
        products: this.props.productsOrig, 
        cardProductArr: []  //информация о выделенном товаре
    };

    select = code => {
        console.log(code);
        this.setState( {selectedProductCode:code}, this.createCardProduct);
    }

    delete = code => {
        this.setState( {
            products: this.state.products.filter( product => product.code !== code ),
        });
    }

    createCardProduct = (code) => {
        this.setState( {
        cardProductArr: this.state.products.filter(product => product.code == code ),
    });
    console.log(this.state.cardProductArr);

    }

    render() {
        let productsTable=this.state.products.map(product =>
            <Product key = {product.code}
                code = {product.code} title= {product.title} price = {product.price}
                url= {product.url} count = {product.count}
                cbSelected = {this.select} cbDeleted = {this.delete}
                isSelected = {this.state.selectedProductCode===product.code}
            />
        );

        let headerTable= this.props.header.map(tit =>
            <tr className = 'Header' key= {tit.code}>
                <th className ='title'> {tit.title1}</th>
                <th className ='price'> {tit.title2}</th>
                <th className ='url'> {tit.title3}</th>
                <th className ='count'> {tit.title4}</th>
                <th className ='button'> {tit.control}</th>
            </tr>
        );

        let CardProduct=this.state.cardProductArr.map(str =>
                <CardProduct key= {str.code}
                code = {str.code} title= {str.title} price = {str.price}
                url= {str.url} count = {str.count}
                cbSelected = {this.select}
                isSelected = {this.state.selectedProductCode===str.code}
                />           
            );

        return (<div className= 'Shop'>
            <div className ='shopName'>{this.props.shop}</div>
                <table className = 'tagTable'>
                    <thead className= 'listTable'>{headerTable}</thead>
                    <tbody className = 'listTable'>{productsTable}</tbody>
                </table>
                <input type='button' className='newProduct' value='New product' onClick={this.newProduct}/>                
                { (this.state.selectedProductCode)?<div className='CardProduct'>{CardProduct}</div>:null }
            </div>
        );
    }
};

export default Shop;

