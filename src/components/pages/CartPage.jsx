// eslint-disable-next-line no-unused-vars
import React from "react";
import { useProduct } from "../context/ProductContext";

function CartPage() {
    
    const { cart, handleDelete,handleCheckOut } = useProduct();

  let total = 0;
  cart.length > 0 &&
    cart.forEach((item) => {
      total = total + item.price;
    });

  // console.log("Cart ~ ",cart);

  console.log("Cart Total ~ ", total);
  return (
    <div className="mt-8">
      <h1 className="text-[60px] font-medium text-center">Cart</h1>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            key={item.id}
            className="flex mt-2 flex-col gap-5 bg-purple-400 p-2 rounded-sm text-white"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-[60px] h-[60px] object-cover rounded-md"
                src={item.image}
              />
              <span className="text-[30px] font-medium">{item.title}</span>
              <span className="text-[30px] font-medium">{item.price} $</span>
              <button
                onClick={(index) => handleDelete(index)}
                className="text-[30px] font-medium p-2 bg-red-500 text-white rounded-md ml-auto"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <span className="block text-center text-green-500 text-[50px] font-medium">
          Giỏ Hàng Trống
        </span>
      )}
      {total > 0 && (
        <>
          <div className=" flex justify-center items-center p-3 text-center font-medium text-[50px]">
            Tổng Tiền Sản Phẩm:
            <span className="ml-2 p-3 bg-blue-500 text-white rounded-md text-[30px]">
              {total}$
            </span>
          </div>
          <button onClick={handleCheckOut} className="p-3 bg-green-600 text-white rounded-md w-full text-[20px] hover:bg-green-500 transition-all">
            Thanh Toán
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
