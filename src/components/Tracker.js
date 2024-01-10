import React from "react";
import { TransactionsContainer } from "./TransactionsContainer";
import { useSelector } from "react-redux";

export function Tracker() {
  const state = useSelector((state) => state.expenseState);

  return (
    <div className="w-full flex flex-col justify-between items-start gap-4">
      {/* expense & income section */}
      <div className="flex justify-center items-center gap-24 mx-4 my-2">
        <div>
          <span className="block text-sm text-zinc-600 font-medium">
            {" "}
            Expense{" "}
          </span>
          <span className="block font-bold text-red-600">
            {" "}
            ₹ {state.expense}{" "}
          </span>
        </div>

        <div>
          <span className="block text-sm text-zinc-600 font-medium">
            {" "}
            Income{" "}
          </span>
          <span className="block font-bold text-green-600">
            {" "}
            ₹ {state.income}{" "}
          </span>
        </div>
      </div>

      {/* transactions list */}
      <TransactionsContainer />
      <div></div>
    </div>
  );
}
