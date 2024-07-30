import React from "react";
import { Link } from "react-router-dom";
const PayPage = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-[70px]">Thanh Toán Thành Công</h1>
      <svg
        className="w-[100px] h-[100px] flex justify-center items-center bg-green-500 p-3  rounded-full mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
      <Link to='/' className="block text-center mt-3 text-[40px] bg-yellow-400 text-white font-medium w-[400px] rounded-lg mx-auto">Tiếp tục mua sắm</Link>
    </div>
  );
};

export default PayPage;
