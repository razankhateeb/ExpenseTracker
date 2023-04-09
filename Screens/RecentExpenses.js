import React, { useEffect } from "react";
import { View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { fetchExpenses } from "../utils/http";

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
