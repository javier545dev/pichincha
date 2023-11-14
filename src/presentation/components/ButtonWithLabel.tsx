import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { colors, sizes } from "@presentation/theme/Styles"

interface Props {
  label: string
  value: string
  disabled?: boolean
  onPress: () => void
}

export default function ButtonWithLabel({ label, value, onPress, disabled }: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Pressable onPress={onPress} style={styles.button} disabled={disabled}>
        <Text
          style={[
            styles.text,
            {
              color: disabled ? colors.gray : colors.black,
            },
          ]}>
          {value}
        </Text>
      </Pressable>
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
  button: {
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "center",
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    fontFamily: "Times New Roman",
  },
  text: {
    fontSize: sizes.xs,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
})
