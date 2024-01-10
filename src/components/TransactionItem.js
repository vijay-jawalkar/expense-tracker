import React from "react";

export function TransactionItem({ item }) {
  return (
    <div
      className={`w-full flex justify-between items-center text-sm text-zinc-500 bg-slate-50 px-3 py-1 font-semibold rounded-sm border-e-4 ${
        item.expense ? "border-red-700" : "border-green-600"
      } `}
    >
      <p>{item.description}</p>
      <p>₹ {item.amount}</p>
    </div>
  );
}
