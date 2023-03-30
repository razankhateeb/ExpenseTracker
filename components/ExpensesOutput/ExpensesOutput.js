import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../../constants/Colors";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { useSelector } from "react-redux";
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
  const data = getData(expenseIds, PeriodNameText);
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;
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
