import React,{useContext} from 'react';
//Components
import Product from './Product';
//Context
import {productContext} from '../context/ProductsContextProvider'

const Store = () => {
    
    const products=useContext(productContext)

    return (
        <div>
            {
                products.map((product)=><Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;