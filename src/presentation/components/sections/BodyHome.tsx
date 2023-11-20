import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

interface FooterProps {
  children: ReactNode
}

export default function BodyHome({ children }: FooterProps) {
  return <View style={styles.body}>{children}</View>
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingTop: 30,
    gap: 40,
    paddingBottom: 10,
  },
})
