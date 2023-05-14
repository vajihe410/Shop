import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { productContext } from '../context/ProductsContextProvider';

const ProductDetail = (props) => {
    const data=useContext(productContext)
    const id=props.match.params.id;
    const product=data[id - 1];
    const{ image, title, price, description, category}= product;
    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category : </span>{category}</p>
                <div >
                    <p>{price}</p>
                    <Link to="./products">Back to shop</Link>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetail;