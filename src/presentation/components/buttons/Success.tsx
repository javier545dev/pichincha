import React from "react"
import { Text, Pressable, StyleSheet } from "react-native"
import { colors, sizes } from "@src/presentation/theme/Styles"

interface Props {
  text: string
  disabled?: boolean
  onPress: () => void
}

export default function Success({ text, onPress, disabled }: Props) {
  return (
    <Pressable
      testID="success-button"
      style={[
        styles.button,
        {
          backgroundColor: disabled ? colors.gray : colors.darkYellow,
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.text,
          {
            color: disabled ? colors.darkGray : colors.black,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: sizes.xs,
    fontWeight: "bold",
  },
})
