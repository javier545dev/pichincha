import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors, sizes } from "@presentation/theme/Styles"

interface Props {
  label: string
  value: string
}

export default function ViewWithLabel({ label, value }: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.section}>
        <Text style={styles.text}>{value}</Text>
      </View>
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
  section: {
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
    color: colors.gray,
  },
})
