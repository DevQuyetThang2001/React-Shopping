import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import { useProduct } from "../context/ProductContext";

const Header = () => {
  const {cart} = useProduct();
  const cartCount =  cart?.length || 0;
  return (
    <>
      <header className="w-full flex justify-between items-center">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <ul className="pl-0">
          <Link className="px-2 inline-block font-medium">CATALOGUE</Link>
          <Link className="px-2 inline-block font-medium">FASHION</Link>
          <Link className="px-2 inline-block font-medium">FAVOURITE</Link>
        </ul>

        <div className="bg-black text-white p-2 cursor-pointer rounded-md relative">
        <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white flex justify-center items-center">{cartCount}</span>
          <Link to="/cart" className="px-2 inline-block font-medium">
            CART
          </Link>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
