import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { sizes } from "@presentation/theme/Styles"

export default function TextWithLabel({ label, data }: { label: string; data: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: sizes.xs,
    fontWeight: "200",
    fontFamily: "Times New Roman",
  },
  data: {
    fontSize: sizes.xs,
    fontWeight: "600",
    fontFamily: "Times New Roman",
  },
})
