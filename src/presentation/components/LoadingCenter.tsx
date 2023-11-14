import React from "react"
import { View, ActivityIndicator, StyleSheet, useWindowDimensions } from "react-native"
import { colors } from "@presentation/theme/Styles"

export default function LoadingCenter({ color = "#FFA500" }: { color?: string }) {
  const { height, width } = useWindowDimensions()
  return (
    <View
      style={[
        styles.container,
        {
          height: height,
          width: width,
        },
      ]}>
      <ActivityIndicator style={styles.indicator} size="large" color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.opacity50,
    position: "absolute",
    width: "100%",
  },
  indicator: {
    padding: 20,
  },
})
