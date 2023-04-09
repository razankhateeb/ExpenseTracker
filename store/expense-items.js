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
        (expense) => expense.id === newExpense.editedExpenseId
      );

      if (index !== -1) {
        state.expensesList[index] = {
          amount: newExpense.expenseData.amount,
          date: newExpense.expenseData.date,
          description: newExpense.expenseData.description,
        }; // update the expense with the given ID in the list
      }
    },
    setExpenses: (state, action) => {
      state.expensesList = action.payload.reverse();
    },
  },
});

// Action creators are generated for each case reducer function
export const { addExpense, removeExpense, updateExpense, setExpenses } =
  ExpensesSlice.actions;

export default ExpensesSlice.reducer;
