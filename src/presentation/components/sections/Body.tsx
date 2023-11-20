import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

interface FooterProps {
  children: ReactNode
}

export default function Body({ children }: FooterProps) {
  return <View style={styles.body}>{children}</View>
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    flexGrow: 1,
    gap: 20,
    paddingBottom: 20,
  },
})
