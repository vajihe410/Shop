import React,{useContext} from 'react';
//Components
import Product from './Product';
//Context
import {productContext} from '../context/ProductsContextProvider'
//Styles
import styles from './Store.module.css'
const Store = () => {
    
    const products=useContext(productContext)

    return (
        <div className={styles.container}>
            {
                products.map((product)=><Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;