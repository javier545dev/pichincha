import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors, sizes } from "@presentation/theme/Styles"

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
  },
  text: {
    fontSize: sizes.sm,
    color: colors.gray,
    fontFamily: "Times New Roman",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
})
