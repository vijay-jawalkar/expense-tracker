import React, { useState } from "react";
import { AddTransaction } from "./AddTransaction";
import { useSelector } from "react-redux";

export function OverviewComponent() {
  const [isAdd, setIsAdd] = useState(false);
  const balance = useSelector((state) => state.expenseState.balance);

  return (
    <div>
      <div className=" w-full flex justify-between items-center my-4">
        <p className="font-semibold text-zinc-800">Balance: ₹ {balance} </p>
        <button
          onClick={() => setIsAdd(!isAdd)}
          className="text-zinc-200 bg-zinc-900 text-sm font-semibold text-md px-3 py-1  rounded-md"
        >
          {isAdd ? "CANCEL" : "ADD"}
        </button>
      </div>

      {isAdd && <AddTransaction setIsAdd={setIsAdd} />}
    </div>
  );
}
