import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const { id, title, image, category } = item;
  return (
    <div className="w-full h-[700px] rounded-xl overflow-hidden">
      <img
        src={image}
        alt="product"
        className="w-full h-[400px] object-cover"
      />

      <div className="w-full mt-5">
        <div className="flex flex-col gap-4">
          <h3 className="text-[20px] font-medium">{title}</h3>
          <span className="text-[24px] text-[#7f7f7f]">{category}</span>

          <button
            onClick={() => navigate(`/product/${id}`)}
            className="inline-block p-4 bg-green-500 text-white rounded-md text-[20px] mt-auto"
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
