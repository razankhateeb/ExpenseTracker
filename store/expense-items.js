import { createSlice } from "@reduxjs/toolkit";

export const ExpensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expensesList: [], // initial state is an empty expenses list
  },
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        ...action.payload,
        id: state.expensesList.length + 1,
      };
      state.expensesList.push(newExpense);
    },

    removeExpense: (state, action) => {
      const index = state.expensesList.findIndex(
        (expense) => expense.id === action.payload
      );
      if (index !== -1) {
        state.expensesList.splice(index, 1); // remove the expense with the given ID from the list
      }
    },
    updateExpense: (state, action) => {
      const newExpense = {
        ...action.payload,
      };
      const index = state.expensesList.findIndex(
        (expense) => expense.id === newExpense.id
      );
      console.log("index to be updated is", index);
      if (index !== -1) {
        state.expensesList[index] = { description, amount, date }; // update the expense with the given ID in the list
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addExpense, removeExpense, updateExpense } =
  ExpensesSlice.actions;

export default ExpensesSlice.reducer;
