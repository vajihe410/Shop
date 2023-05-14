import React,{ useState , useEffect , createContext } from 'react';
//API
import {getProducts} from '../services/api'

export const productContext=createContext();

const ProductsContextProvider = ({children}) => {

    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchApi=async()=>{
            setProducts(await getProducts())
        }
        fetchApi()

    },[]);
    return (
        <productContext.Provider value={products}>
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextProvider;