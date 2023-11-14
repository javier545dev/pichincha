import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "@presentation/views/home/Home"
import ProductCreate from "@presentation/views/create/ProductCreate"
import ProductDetail from "@presentation/views/detail/ProductDetail"
import ProductUpdate from "@presentation/views/update/ProductUpdate"

import { Product } from "@domain/entities/Product"

export type RootStackParamList = {
  HomeScreen: undefined
  ProductDetail: Product
  ProductCreate: undefined
  ProductUpdate: {
    id: string
    name: string
    description: string
    logo: string
    date_release: Date
    date_revision: Date
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="ProductCreate" component={ProductCreate} />
      <Stack.Screen name="ProductUpdate" component={ProductUpdate} />
    </Stack.Navigator>
  )
}
