import React from 'react';
import { useState , useEffect , createContext } from 'react';
//API
import {getProducts} from '../services/api'

const productContext=createContext();

const ProductsContextProvider = (props) => {

    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchApi=async()=>{
            setProducts(await getProducts())
        }
        fetchApi()

    },[])
    return (
        <productContext.Provider value={products}>
            {props.children}
        </productContext.Provider>
    );
};

export default ProductsContextProvider;