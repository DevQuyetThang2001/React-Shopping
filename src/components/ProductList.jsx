// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleGetProducts() {
      const url = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // console.log(json);
        setProducts(json);
      } catch (error) {
        console.error(error.message);
      }
    }

    handleGetProducts();
  }, []);

  return (
    <section className="w-full mt-11">
      <h1 className="text-black text-[48px] font-black">NEW ARRIVALS</h1>

      <div className="w-full grid grid-cols-3 gap-16">
        {products.length > 0 &&
          products.map((product, index) => (
            <ProductCard item={product} key={index} />
          ))}
      </div>
    </section>
  );
}
