import React from "react";
import { ScrollView, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpensesScreen() {
  return (
    <View>
      <ExpensesOutput
        PeriodNameText={"Last 7 Days"}
        fallBackText={"No Expenses in the past 7 days"}
      />
    </View>
  );
}

export default RecentExpensesScreen;
