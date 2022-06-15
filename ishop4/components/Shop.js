import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import CardProduct from './CardProduct';


class Shop extends React.Component {

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
        workMode:this.props.startWorkMode, //0 -start, 1 - view, 2 - edit
        selectedProductCode: null,
        products: this.props.productsOrig, 
        key: '5',
        add: false,         //добавление товара
        cardProductArr: [], //информация о выделенном товаре
        editProduct: false, //товар редактируется, лишние кнопки будут неактивны 
        blockChange: false, //если товар не закончил редактирование, кнопки  неактивны,
    };                      //  переход к другой строке невозможен

    select = code => {
        let selected = this.state.products;
        this.setState( {selectedProductCode:code,
             cardProductArr: selected.filter(product => product.code == code),
             workMode:1,
            });
    }

    delete = code => {
        let deleted= this.state.products;
        this.setState( {
            products: deleted.filter( product => product.code !== code ),
            workMode: 0, selectedProductCode: '',
        });
    }

    edit = (code) => {
            this.setState( {workMode:2, editProduct: true, isSelected: true, selectedProductCode: code, blockChange: true} )   
    }

    onChange = () => {
        this.setState({blockChange: true});
    }

    save = (dataFromChild) => {
        let products;
        if (this.state.add){
            let product = {...dataFromChild, code: this.state.key};
            products=this.state.products.slice();
            products.push(product);
        }
        else {
            products = this.state.products.map(v => v.code==dataFromChild.code ? dataFromChild : v)
        }
        function byField(field) {
            return (a, b) => a[field] > b[field] ? 1 : -1;
          }
        
     this.setState( {workMode:1, blockChange: false, add: false, products: products.sort(byField('code')), editProduct: false}
    );
    }

    cancel = () => {
        let edit=this.state.cardProductArr;
        this.setState( {workMode:1, blockChange: false, add: false, editProduct: false, cardProductArr: edit} );
    }

    newProduct = () => {
        let key = ++this.state.key;
        let newKey = String(key);
        this.setState({workMode: 2, key: newKey, add: true, editProduct: true});
    }

       render() {
        let productsTable=this.state.products.map(product =>
            <Product key = {product.code}
                code = {product.code} title= {product.title} price = {product.price}
                url= {product.url} count = {product.count} blockChange={this.state.blockChange}
                cbSelected = {this.select} cbDeleted = {this.delete}
                isSelected = {this.state.selectedProductCode==product.code}
                workMode={this.state.workMode} add={this.state.add}
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
        
        let addProduct={code: this.state.key,
            name: '',
            price: '',
            url:'',
            count:''};
        
        let cardProduct=this.state.products.find(v => v.code == this.state.selectedProductCode) ; 

        return (<div className= 'Shop'>
            <div className ='shopName'>{this.props.shop}</div>
                <table className = 'tagTable'>
                    <thead className= 'listTable'>{headerTable}</thead>
                    <tbody className = 'listTable'>{productsTable}</tbody>
                </table>
                <input type='button' disabled={this.state.editProduct} className='newProduct' value='New product' onClick={this.newProduct}/>                
                { (this.state.selectedProductCode || this.state.add) &&
                <CardProduct  key= {this.state.add? this.state.key : this.props.isSelected} product= {this.state.add?addProduct:cardProduct}
                        cbSelected = {this.select}  add={this.state.add}
                        workMode={this.state.workMode}
                        cbCancel = {this.cancel} isSelected = {this.state.selectedProductCode}
                        cbOnChange={this.onChange}
                        cbSaveChanges = {this.save}
                />}
                
            </div>
        );
    }
};

export default Shop;

