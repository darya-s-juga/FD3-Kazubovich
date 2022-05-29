import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import CardProduct from './CardProduct';

class Shop extends React.Component {

    // displayName: 'Shop',

    static propTypes = {
        startWorkMode: PropTypes.number.isRequired,
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
        workMode:this.props.startWorkMode,
        selectedProductCode: null,
        products: this.props.productsOrig, 
        cardProductArr: [], //информация о выделенном товаре
        editProduct: false, //когда вносятся данные в товар, лишние кнопки будут неактивны 
        finishRedact: true, //отображение данных о товаре, кнопки  активны 
        // titleText:
    };

    select = code => {
        this.setState( {selectedProductCode:code,
             cardProductArr: this.state.products.filter(product => product.code == code),
            });
    }

    delete = code => {
        this.setState( {
            products: this.state.products.filter( product => product.code !== code ),
        });
    }

    edit = () => {
        this.setState( {workMode:2, editProduct: true} );
    }

    save = () => {
        this.setState( {workMode:1,    } );
    }

    cancel = () => {
        this.setState( {workMode:1, editProduct: false} );
    }

       render() {
        let productsTable=this.state.products.map(product =>
            <Product key = {product.code}
                code = {product.code} title= {product.title} price = {product.price}
                url= {product.url} count = {product.count}
                cbSelected = {this.select} cbDeleted = {this.delete}
                isSelected = {this.state.selectedProductCode===product.code}
                workMode={this.state.workMode}
                cbEdit = {this.edit} editProduct = {this.state.editProduct}
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

        let cardProduct=this.state.cardProductArr.map(str =>
                <CardProduct key= {str.code}
                code = {str.code} title= {str.title} price = {str.price}
                url= {str.url} count = {str.count}
                cbSelected = {this.select}
                isSelected = {this.state.selectedProductCode===str.code}
                workMode={this.state.workMode}
                cbCancel = {this.cancel}
                cbSave = {this.save}
                cbFinishRedact={this.finishRedact}
                />           
            );

        return (<div className= 'Shop'>
            <div className ='shopName'>{this.props.shop}</div>
                <table className = 'tagTable'>
                    <thead className= 'listTable'>{headerTable}</thead>
                    <tbody className = 'listTable'>{productsTable}</tbody>
                </table>
                <input type='button' disabled={this.state.editProduct} className='newProduct' value='New product' onClick={this.newProduct}/>                
                { (this.state.selectedProductCode)?<div className='CardProduct'>{cardProduct}</div>:null }
            </div>
        );
    }
};

export default Shop;

