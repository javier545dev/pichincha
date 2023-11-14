import React, { ReactNode } from "react"
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native"

interface Props {
  children: ReactNode
}

export default function KeyboardAvoiding({ children }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
