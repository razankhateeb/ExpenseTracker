import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpensesScreen() {
  return (
    <View>
      <ExpensesOutput
        PeriodNameText={"All Expenses"}
        fallBackText={"No Expenses Added"}
      />
    </View>
  );
}

export default AllExpensesScreen;
