import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import IconButton from "../components/Ui/IconButton";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import LoadingOverlay from "../components/Ui/LoadingOverlay";
import ErrorOverlay from "../components/Ui/ErrorOverlay";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import {
  addExpense,
  removeExpense,
  updateExpense,
} from "../store/expense-items";
import {
  storeExpense,
  updateExpenseDetails,
  deleteExpense,
} from "../utils/http";

function ManageExpenses({ route, navigation }) {
  const dispatch = useDispatch();
  const editedExpenseId = route.params?.expenseID;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  function ErrorHandler() {
    setError(null);
  }

  // !! converts to boolean
  const isEditing = !!editedExpenseId;

  const selectedExpense = isEditing
    ? useSelector((state) =>
        state.expenseItem.expensesList.find(
          (expense) => expense.id === editedExpenseId
        )
      )
    : null;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      dispatch(removeExpense(editedExpenseId));
      navigation.goBack();
    } catch (err) {
      setError("could not delete expense");
      setIsSubmitting(false);
    }
  }

  function cancelButtonHandler() {
    navigation.goBack();
  }

  async function confirmButtonHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        dispatch(
          updateExpense({
            editedExpenseId,
            expenseData,
          })
        );
        await updateExpenseDetails(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        dispatch(addExpense({ ...expenseData, id: id }));
      }
      navigation.goBack();
    } catch (err) {
      setError("couldn't save data");
      setIsSubmitting(false);
    }
  }
  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={ErrorHandler} />;
  }
  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelButtonHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmButtonHandler}
        defaultValues={selectedExpense}
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
