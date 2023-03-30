import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expense-items";

export default configureStore({
  reducer: { expenseItem: expensesReducer },
});
