import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useAllProducts } from "./hooks/useProducts";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
 
function App() {
  const {products, loading} = useAllProducts();

  return (
    <div>
      <NavBarComponent />
      {loading ? (
      <LoaderComponent/>
      ) : (
      <ItemListContainer products={products} />
      )}
    </div>
  );
}

export default App;