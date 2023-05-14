import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { productContext } from '../context/ProductsContextProvider';
//styles
import styles from './ProductDetails.module.css'

const ProductDetail = (props) => {
    const data=useContext(productContext)
    const id=props.match.params.id;
    const product=data[id - 1];
    const{ image, title, price, description, category}= product;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product'  />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category : </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <p className={styles.price}>{price}</p>
                    <Link to="./products">Back to shop</Link>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetail;