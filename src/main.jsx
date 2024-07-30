import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import { ProductProvider } from "./components/context/ProductContext.jsx";
import {ToastContainer} from 'react-toastify'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <App />
        <ToastContainer/>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);