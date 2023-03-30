import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import IconButton from "../components/Ui/IconButton";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import {
  addExpense,
  removeExpense,
  updateExpense,
} from "../store/expense-items";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";

function ManageExpenses({ route, navigation }) {
  const expenseIds = useSelector((state) => state.expenseItem.ids);
  const dispatch = useDispatch();
  const editedExpenseId = route.params?.expenseID;

  // !! converts to boolean
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    dispatch(removeExpense(editedExpenseId));
    navigation.goBack();
  }

  function cancelButtonHandler() {
    navigation.goBack();
  }

  function confirmButtonHandler(expenseData) {
    isEditing
      ? dispatch(
          updateExpense({
            editedExpenseId,
            expenseData,
          })
        )
      : dispatch(addExpense(expenseData));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelButtonHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmButtonHandler}
      />

      <View>
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="ios-trash"
              size={50}
              color={Colors.error}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: Colors.error,
    borderTopWidth: 2,
    alignItems: "center",
  },
  addItemsContainer: {
    textAlign: "center",
  },
});
