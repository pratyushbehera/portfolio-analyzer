"use client";

import { Stock } from "@/types";

export default function StockCard({
  stock,
  isSelected,
  onClick,
}: {
  stock: Stock;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-colors ${
        isSelected ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-50"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{stock.tradingsymbol}</h3>
        <span
          className={`font-medium ${
            stock.pnl >= 0
              ? isSelected
                ? "text-white"
                : "text-green-600"
              : isSelected
              ? "text-white"
              : "text-red-600"
          }`}
        >
          ₹{stock.pnl.toLocaleString()} ({stock.pnl_percentage}%)
        </span>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <span>Qty: {stock.quantity}</span>
        <span>LTP: ₹{stock.last_price.toLocaleString()}</span>
      </div>
    </div>
  );
}
