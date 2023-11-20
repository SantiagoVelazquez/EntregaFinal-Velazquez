import { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiProducts";


export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllProducts()
        .then(res => {setProducts(res.data.products);})
        .catch(err =>{console.log(err);})
        .finally(() => setLoading(false))

}, []);

return {products, loading};
};