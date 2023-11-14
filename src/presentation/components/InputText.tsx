import React from "react"
import { View, Text, TextInput, TextInputProps, StyleSheet } from "react-native"
import { colors, sizes } from "@presentation/theme/Styles"

export default function InputText({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  label,
}: TextInputProps & { label?: string }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: colors.white,
  },
  label: {
    fontSize: sizes.xxs,
    fontWeight: "600",
    marginBottom: 5,
    fontFamily: "Times New Roman",
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.gray,
    paddingHorizontal: 20,
    fontFamily: "Times New Roman",
  },
})
