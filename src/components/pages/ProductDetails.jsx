// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
export default function ProductDetails() {
  const { id } = useParams();
  const {product, handleGetProducts,handleAddToCart} = useProduct();
  // console.log("product ~ ",product);

  useEffect(() => {
    handleGetProducts(id);
  }, []);

  return (
    <div className="w-full mt-5 h-[600px] grid grid-cols-2 gap-4">
      <img
        className="w-full h-[500px] object-cover rounded-md"
        src={product?.image}
      />
      <div className="flex flex-col gap-4">
        <h1 className="font-black text-[50px]">{product?.title}</h1>
        <span className="text-[24px] font-normal">{product?.price} $</span>
        <span className="text-[24px] font-normal bg-lime-500 p-2 text-white rounded-md">{product?.category}</span>
        <button onClick={() => handleAddToCart({
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price
        })} className="block p-4 text-2xl bg-blue-500 text-white rounded-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
