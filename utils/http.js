import axios from "axios";

const BACKEND_URL =
  "https://react-native-expenses-ap-b0c8a-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      description: response.data[key].description,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date).toISOString().slice(0, 10),
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export async function updateExpenseDetails(id, expenseData) {
  return await axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
