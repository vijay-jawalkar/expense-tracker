import React, { useState } from "react";
import { TransactionItem } from "./TransactionItem";
import { useSelector } from "react-redux";

export function TransactionsContainer() {
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState([]);
  const state = useSelector((state) => state.expenseState);

  function handleFilter(e) {
    e.preventDefault();
    const fiterList = state.transactionsList.filter((item) => {
      return item.description.startsWith(search);
    });
    setFilterList(fiterList);
  }

  return (
    <div className="w-full">
      <p className="font-semibold text-zinc-800"> Transactions </p>

      <form onSubmit={handleFilter} className="flex items-center gap-2 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          value={search}
          placeholder="Search"
          className="bg-gray-50 w-full rounded-md my-2 px-2 py-1 text-sm"
        />

        <input
          type="submit"
          value="Search"
          className="text-xs bg-black h-6 px-2 py-1 text-zinc-200 rounded-md"
        />
      </form>

      <div className="flex flex-col gap-2 mt-4">
        {filterList.length && search.length
          ? filterList.map((item, index) => {
              return <TransactionItem key={index} item={item} />;
            })
          : state.transactionsList.map((item, index) => {
              return <TransactionItem key={index} item={item} />;
            })}
      </div>
    </div>
  );
}
