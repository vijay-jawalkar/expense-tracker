import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../redux/expenseSlice";

export function AddTransaction({ setIsAdd }) {
  const [isExpense, setIsExpense] = useState(false);
  const [isIncome, setIsIncome] = useState(false);
  const dispatch = useDispatch();

  function handleTransaction(e) {
    e.preventDefault();

    if (isExpense) {
      dispatch(
        addExpense({
          amount: e.target.amount.value,
          description: e.target.description.value,
          expense: true,
        })
      );
    } else {
      dispatch(
        addIncome({
          amount: e.target.amount.value,
          description: e.target.description.value,
          income: true,
        })
      );
    }

    console.log();
    setIsAdd(false);
  }

  return (
    <div>
      <form onSubmit={handleTransaction}>
        <input
          type="number"
          name="amount"
          placeholder="amount"
          className="bg-gray-50 w-full rounded-md my-2 px-2 py-1 text-sm"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          className="bg-gray-50 w-full rounded-md my-2 px-2 py-1 text-sm"
        />

        <div className="flex justify-start items-center gap-2 text-zinc-800">
          <p>
            <input
              type="radio"
              id="option1"
              name="options"
              value="option1"
              onChange={() => setIsExpense(!isExpense)}
              className="me-2"
            />
            <label for="option1">Expense</label>
          </p>
          <p>
            <input
              type="radio"
              id="option2"
              name="options"
              value="option2"
              onChange={() => setIsIncome(!isIncome)}
              className="me-2"
            />
            <label for="option2">Income</label>
          </p>
        </div>
        <div className="flex justify-center items-center my-2">
          <input
            type="submit"
            value="Add Transaction"
            className="text-zinc-200 bg-zinc-900 text-sm font-semibold text-md px-3 py-1  rounded-md mx-auto"
          />
        </div>
      </form>
    </div>
  );
}
