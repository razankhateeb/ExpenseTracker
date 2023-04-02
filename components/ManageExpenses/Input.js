import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Input({ label, textInputConfig, style, inValid }) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig && textInputConfig.multiline && styles.inputMultiline,
          textInputConfig.style,
          inValid && styles.invalidInput,
        ]}
        {...textInputConfig}
      />
    </View>
  );
}

export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: Colors.primary500,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: Colors.error,
  },
  invalidInput: {
    borderColor: Colors.error,
  },
});
