import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function ExpenseCategory() {
  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>Duration of days</Text>
      <Text style={styles.totalText}>Total</Text>
    </View>
  );
}

export default ExpenseCategory;

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
