import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import Colors from "../../constants/Colors";
import Button from "../Ui/Button";
import Input from "./Input";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: submitButtonLabel === "Add" ? true : !!defaultValues,
    },
    date: {
      value: defaultValues ? defaultValues.date : "",
      isValid: submitButtonLabel === "Add" ? true : !!defaultValues,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: submitButtonLabel === "Add" ? true : !!defaultValues,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs({
      ...inputs,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    });
  }
  const [submit, setSubmit] = useState(false);

  function onSubmitHandler() {
    setSubmit(true);
    let date = null;

    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value).toISOString().slice(0, 10),
      //  date: date ? new Date(inputs.date.value).toISOString().slice(0, 10) : "",
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "";
    const desctIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !desctIsValid || !dateIsValid) {
      setInputs((curInputs) => {
        return {
          amount: {
            value: curInputs.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: curInputs.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: curInputs.description.value,
            isValid: desctIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }
  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.formTitles}> Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
          style={styles.rowInput}
          inValid={!inputs.amount.isValid}
          textInputConfig={{
            value: inputs.amount.value,
            onChangeText: inputChangedHandler.bind(this, "amount"),
          }}
          label="Amount"
        />
        <Input
          style={styles.rowInput}
          inValid={!inputs.date.isValid}
          textInputConfig={{
            value: inputs.date.value,
            placeholder: "YYYY-MM-DD",
            maxlength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
          }}
          label="Date"
        />
      </View>
      <Input
        inValid={!inputs.description.isValid}
        textInputConfig={{
          value: inputs.description.value,
          type: "default",
          onChangeText: inputChangedHandler.bind(this, "description"),
          multiline: true,
        }}
        label="Description"
      />
      {formIsInvalid && submit && (
        <Text style={styles.errorText}>
          Input is Invalid - please check your entered data !
        </Text>
      )}
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
  errorText: {
    color: Colors.error,
    textAlign: "center",
    margin: 8,
  },
});
