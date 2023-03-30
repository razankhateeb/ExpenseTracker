import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import Button from "../Ui/Button";
import Input from "./Input";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
  const [inputValue, setInputIdentifier] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputIdentifier({
      ...inputValue,
      [inputIdentifier]: enteredValue,
    });
  }
  function onSubmitHandler() {
    const expenseData = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date).toISOString(),
      description: inputValue.description,
    };
    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.formTitles}> Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
          style={styles.rowInput}
          textInputConfig={{
            value: inputValue.amount,
            //   placeholder: "Amount",
            onChangeText: inputChangedHandler.bind(this, "amount"),
          }}
          label="Amount"
        />
        <Input
          style={styles.rowInput}
          textInputConfig={{
            value: inputValue.date,
            placeholder: "YYYY-MM-DD",
            maxlength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
          }}
          label="Date"
        />
      </View>
      <Input
        textInputConfig={{
          value: inputValue.description,
          type: "default",
          //   placeholder: "Description",
          onChangeText: inputChangedHandler.bind(this, "description"),

          multiline: true,
        }}
        label="Description"
      />
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={onSubmitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  inputRows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginVertical: 10,
  },
  formTitles: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: Colors.primary500,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "40%",
    margingHorizontal: 8,
  },
});
