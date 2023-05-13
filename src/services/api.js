import axios from "axios";

const BASE_url="https://fakestoreapi.com";

const getProducts =async () => {
    const response=await axios.get(`${BASE_url}/products`);
    return response.data;
}
export  {getProducts}