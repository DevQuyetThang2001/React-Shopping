import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom'
const ProductContext = createContext();



const ProductProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [product,setProduct] = useState();
  const navigate = useNavigate();
  async function handleGetProducts(id) {
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  const handleAddToCart = (newPhoto) => {
    const status = cart.some((item) => item.id === newPhoto.id);
    if (status) {
      setCart([...cart]);
      toast.warning("Sản Phẩm Đã Có Trong Giỏ Hàng")
    } else {
      setCart([...cart, newPhoto]);
      toast.success('Thêm vào giỏ hàng thành công!')
    }
   
  };


  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    toast.error("Sản Phẩm Này Đã Xóa Khỏi Giỏ Hàng")
  }


  const handleCheckOut = () => {
    navigate('/pay')
    setCart([]);
  }

  const values = {
    handleGetProducts,
    handleAddToCart,
    cart,
    product,
    handleDelete,
    handleCheckOut
  };
  return (
    <ProductContext.Provider value={values} {...props}></ProductContext.Provider>
  );
};

function useProduct() {
  const context = useContext(ProductContext);
  if (typeof context === "undefined")
    throw new Error("UseProduct mus be within ProductProvier");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ProductProvider, useProduct };
