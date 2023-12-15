import React from "react";
import { useAllProductsByFilter } from "../hooks/useProducts";
import { ItemListContainer } from "../components";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllProductsByFilter("products", categoryId, "category");


  return <ItemListContainer products={products} />;
};

