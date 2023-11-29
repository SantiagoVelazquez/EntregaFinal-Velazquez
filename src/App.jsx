import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { MainRouter } from "./router";
import { CartProvider } from "./context";
 
function App() {

  return (
    <CartProvider>
    <div>
      <MainRouter></MainRouter>
    </div>
    </CartProvider>
  );
}

export default App;