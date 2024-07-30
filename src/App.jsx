import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/pages/ProductDetails";
import CartPage from "./components/pages/CartPage";
import PayPage from "./components/pages/PayPage";
import { useProduct } from "./components/context/ProductContext";

function App() {
  const { cart } = useProduct();
  console.log(cart);
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/pay" element={<PayPage></PayPage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
