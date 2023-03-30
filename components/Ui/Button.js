import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flatButton]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.primary700,
  },
  flatButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
  },
  flatText: {
    color: Colors.primary600,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: Colors.primary500,
    borderRadius: 4,
  },
});
