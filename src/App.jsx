import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {NavBarComponent, ItemListContainer, LoaderComponent} from "./components";
import { useAllProducts } from "./hooks/useProducts";
 
function App() {
  const {products, loading, error} = useAllProducts();

  return (
    <div>
      <NavBarComponent />
      {loading ? (
      <LoaderComponent/>
      ) : error ? (
        <div>
          Hubo un error
        </div>
        ) : (
      <ItemListContainer products={products} />
      )}
    </div>
  );
}

export default App;