import React from "react"
import { StyleSheet, Text } from "react-native"
import { sizes } from "@presentation/theme/Styles"
export default function Header({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: sizes.xxl,
    fontWeight: "bold",
    paddingBottom: 20,
    fontFamily: "Times New Roman",
  },
})
