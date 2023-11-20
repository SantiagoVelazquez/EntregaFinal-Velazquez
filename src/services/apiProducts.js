import axios from "axios";

export function getAllProducts (limit = 5) {
    return axios.get('https://dummyjson.com/products?=limit${limit}')
} 

