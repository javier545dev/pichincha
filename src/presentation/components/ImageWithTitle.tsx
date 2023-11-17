import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { sizes } from "@presentation/theme/Styles"

interface Props {
  label: string
  url: string
}

export default function ImageWithTitle({ label, url }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingBottom: 10,
  },
  label: {
    fontSize: sizes.xs,
    marginBottom: 5,
    fontWeight: "200",
    fontFamily: "Times New Roman",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
  },
})
