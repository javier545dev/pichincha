import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { sizes } from "@presentation/theme/Styles"

interface Props {
  title: string
  subtitle: string
}

export default function HeaderProductDetail({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: sizes.xl,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: sizes.xxs,
    fontWeight: "400",
    fontFamily: "Times New Roman",
  },
})
