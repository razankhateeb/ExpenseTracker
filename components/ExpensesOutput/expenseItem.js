import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { getFormattedDate } from "../../utils/getDateFormatter";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();
  function itemDetailsHandler() {
    navigation.navigate("ManageExpenses", { expenseID: id });
  }
  return (
    <Pressable
      onPress={itemDetailsHandler}
      android_ripple={{ color: Colors.gray200 }}
      style={({ pressed }) => pressed && styles.pressEffect}
    >
      <View style={styles.itemOuterContainer}>
        <View style={styles.itemInnerContainer}>
          <Text style={styles.itemName}>{description}</Text>
          <Text style={styles.itemDate}>{date}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
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
    elevation: 3,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  priceContainer: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
  },
  itemInnerContainer: {
    flex: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  itemDate: {
    fontSize: 14,
    color: Colors.gray200,
  },
  itemPrice: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
  pressEffect: {
    opacity: 0.5,
  },
});
