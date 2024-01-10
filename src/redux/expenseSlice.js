import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",

    initialState: {
        balance: 0,
        income: 0,
        expense: 0,
        transactionsList: []
    },

    reducers: {
        
        addExpense(state, action) {
            const amount = Number(action.payload.amount); // Parsing amount as a number
            state.transactionsList.push(action.payload);
            state.expense += amount;
            state.balance -= amount;
          },
        
          addIncome(state, action) {
            const amount = Number(action.payload.amount); // Parsing amount as a number
            state.transactionsList.push(action.payload);
            state.income += amount;
            state.balance += amount;
          }
    }
})

export const { addExpense, addIncome} = expenseSlice.actions;
export const expenseReducer = expenseSlice.reducer;
