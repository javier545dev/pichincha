import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import Separator from "@presentation/components/Separator"

import { colors, sizes } from "@presentation/theme/Styles"

interface HeaderProps {
  backgroundColor?: string
  separatorColor?: string
  children?: string
}

export default function Logo({
  backgroundColor = colors.white,
  separatorColor = colors.darkGray,
  children = "BANCO PICHINCHA",
}: HeaderProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@presentation/assets/Logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.textLogo}>{children}</Text>
      </View>
      <Separator color={separatorColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 10,
  },
  image: {
    height: 20,
    width: 20,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: "100%",
    gap: 10,
  },
  textLogo: {
    fontSize: sizes.md,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.darkGray,
  },
})
