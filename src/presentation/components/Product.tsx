import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import Icon from "react-native-vector-icons/Entypo"

import { RootStackParamList } from "@presentation/navigation/MainStackNavigation"
import { Product as ProductInterface } from "@domain/entities/Product"

import { colors, sizes } from "@presentation/theme/Styles"

export default function Product(props: ProductInterface) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <Pressable
      testID={`product-${props.id}`}
      onPress={() => navigation.navigate("ProductDetail", { ...props })}
      style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.subtitle}>{props.id}</Text>
      </View>
      <Icon name="chevron-right" size={sizes.xl} color={colors.gray} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  button: {
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    alignItems: "flex-start",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: sizes.xs,
    fontWeight: "400",
    fontFamily: "Times New Roman",
  },
  subtitle: {
    fontSize: sizes.xs,
    fontWeight: "400",
    color: colors.gray,
    fontFamily: "Times New Roman",
  },
})
