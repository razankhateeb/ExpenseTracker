import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>{periodName}</Text>
      <Text style={styles.totalText}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary900,
    padding: 10,
    marginHorizontal: 18,
    marginTop: 18,
    borderRadius: 6,
  },
  totalText: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
  periodText: {
    fontSize: 12,
    color: Colors.primary600,
  },
});
