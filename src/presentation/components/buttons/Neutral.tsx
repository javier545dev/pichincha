import React from "react"
import { Text, Pressable, StyleSheet } from "react-native"
import { colors, sizes } from "@src/presentation/theme/Styles"

interface Props {
  text: string
  onPress: () => void
}

export default function Neutral({ text, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress} testID="neutral-button">
      <Text style={styles.text}>{text}</Text>
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
    backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: sizes.xs,
    fontWeight: "bold",
    color: colors.black,
  },
})
