import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function ExpenseItem({ children }) {
  return (
    <View style={styles.itemOuterContainer}>
      <View>
        <Text style={styles.itemName}>Item Name</Text>
        <Text style={styles.itemDate}>date added</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>price</Text>
      </View>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  itemOuterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    padding: 20,
    marginHorizontal: 18,
    marginVertical: 8,
    borderRadius: 6,
  },
  priceContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },

  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  itemDate: {
    fontSize: 14,
    color: "#dedcdc",
  },
  itemPrice: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
