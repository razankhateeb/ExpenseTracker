import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../../constants/Colors";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../../utils/http";
import { setExpenses } from "../../store/expense-items";
import LoadingOverlay from "../Ui/LoadingOverlay";
import ErrorOverlay from "../Ui/ErrorOverlay";

const getData = (expenseIds, PeriodNameText) => {
  if (PeriodNameText === "Last 7 Days") {
    return expenseIds.filter((item) => {
      const itemDate = new Date(item.date);
      const now = new Date();
      const diffInDays = Math.ceil(
        Math.abs(now - itemDate) / (1000 * 60 * 60 * 24)
      );
      return diffInDays <= 7;
    });
  }
  return expenseIds;
};
function ExpensesOutput({ PeriodNameText, fallBackText }) {
  const expenseIds = useSelector((state) => state.expenseItem.expensesList);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  function ErrorHandler() {
    setError(null);
  }

  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchExpenses();
        dispatch(setExpenses(expenses));
      } catch (error) {
        setError("Couldn't fetch expenses ");
      }

      setIsFetching(false);
    }
    getExpenses();
  }, []);
  const data = getData(expenseIds, PeriodNameText);
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={ErrorHandler} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (expenseIds.length > 0) {
    content = <ExpensesList data={data} periodName={PeriodNameText} />;
  }

  return (
    <View>
      <ExpensesSummary periodName={PeriodNameText} expenses={data} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  infoText: {
    marginTop: 50,
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary500,
  },
});
