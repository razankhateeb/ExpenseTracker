import React from "react";
import { ScrollView, Text, View } from "react-native";
import ExpenseCategory from "../components/ExpensesOutput/ExpenseCategory";
import ExpenseItem from "../components/ExpensesOutput/expenseItem";

function RecentExpensesScreen() {
  return (
    <View>
      <ExpenseCategory />
      <ScrollView>
        <ExpenseItem />
      </ScrollView>
    </View>
  );
}

export default RecentExpensesScreen;
