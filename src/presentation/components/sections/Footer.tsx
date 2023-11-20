import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface FooterProps {
  children: ReactNode
}

export default function Footer({ children }: FooterProps) {
  const { bottom } = useSafeAreaInsets()
  return (
    <View
      style={[
        styles.footer,
        {
          paddingBottom: bottom === 0 ? 20 : bottom,
        },
      ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 5,
    gap: 10,
  },
})
