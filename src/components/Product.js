import React from 'react';
import { Link } from 'react-router-dom';
//Functions
import { shorten } from '../helper/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image}/>
            <h3>{shorten(productData.title)}</h3>
            <p>`${productData.price} $`</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detail</Link>
                <button>Add to card</button>
            </div>
        </div>
    );
};

export default Product;