import axios from "axios";

export function getAllProducts (limit= 12) {
    return axios.get(`https://dummyjson.com/products?limit=${limit}`)
} 

export function getSingleProducts(id= 2) {
    return axios.get(`https://dummyjson.com/products/${id}`)
}
