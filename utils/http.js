import axios from "axios";

const BACKEND_URL =
  "https://react-native-expenses-ap-b0c8a-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}
export function fetchExpenses() {
  axios.post(BACKEND_URL + "/expenses.json");
}
