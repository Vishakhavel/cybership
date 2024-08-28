// components/Order.tsx
import React from "react";

type OrderProps = {
  date: string;
  orderNumber: string;
  status: string;
  price: string;
};

const Order: React.FC<OrderProps> = ({ date, orderNumber, status, price }) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
        <span className="text-sm text-gray-500">{date}</span>
        <span className="font-bold text-lg">{orderNumber}</span>
        <span className="text-sm">{status}</span>
      </div>
      <div className="flex justify-end">
        <span className="text-lg font-bold">${price}</span>
      </div>
    </div>
  );
};

export default Order;
