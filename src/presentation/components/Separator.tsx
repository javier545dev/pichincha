import React from "react"
import { StyleSheet, View } from "react-native"

import { colors } from "@presentation/theme/Styles"

interface SeparatorProps {
  color?: string
  height?: number
}

export default function Separator({ color = colors.gray, height = 1 }: SeparatorProps) {
  return (
    <View
      style={[
        styles.separator,
        {
          backgroundColor: color,
          height: height,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
  },
})
