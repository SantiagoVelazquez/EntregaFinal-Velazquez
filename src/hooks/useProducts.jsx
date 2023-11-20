import { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiProducts";


export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getAllProducts()
        .then(res => {setProducts(res.data.products);})
        .catch(err => setError(true))
        .finally(() => setLoading(false))

}, []);

return {products, loading, error};
};