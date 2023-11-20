import React, { ReactNode } from "react"
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native"

interface ScrollProps {
  children: ReactNode
  props?: ScrollViewProps
}

export default function Scroll({ props, children }: ScrollProps) {
  return (
    <ScrollView {...props} contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingTop: 30,
    width: "100%",
    paddingHorizontal: 30,
  },
})
