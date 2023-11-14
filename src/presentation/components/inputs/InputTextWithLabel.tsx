import { useValidateInput } from "@src/presentation/hooks/useValidateInput"
import { colors, sizes } from "@src/presentation/theme/Styles"
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

interface Props {
  label: string
  value: string
  type: string
  required?: boolean
  placeholder?: string
  maxLength?: number
  editable?: boolean
  error?: string
  onChangeText: (text: string) => void
}

export default function InputTextWithLabel({
  label,
  placeholder,
  value,
  type,
  required = false,
  editable = true,
  maxLength,
  onChangeText,
}: Props) {
  const [isFocused, setIsFocused] = useState(false)
  const { error, warning, loading } = useValidateInput(value, type, required, isFocused)

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={colors.gray}
        focusable={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={editable}
        maxLength={maxLength}
        onChangeText={onChangeText}
        style={[
          styles.input,
          !editable && {
            backgroundColor: colors.lightGray,
            color: colors.gray,
            borderColor: colors.lightGray,
          },
          isFocused && { borderColor: colors.warning },
          error !== null && { borderColor: colors.danger },
          warning !== null && { borderColor: colors.danger },
        ]}
      />
      {loading && <Text style={styles.loading}>Validando...</Text>}
      {warning && <Text style={styles.error}>{warning}</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontSize: sizes.xs,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  input: {
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    fontFamily: "Times New Roman",
  },
  error: {
    color: colors.danger,
    fontSize: sizes.xxs,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  warning: {
    color: colors.warning,
    fontSize: sizes.xxs,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  loading: {
    color: colors.warning,
    fontSize: sizes.xxs,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
})
