import React, { useCallback } from "react"
import { View } from "react-native"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { HomeViewModel } from "@presentation/views/home/ViewModel"
import { RootStackParamList } from "@presentation/navigation/MainStackNavigation"

import Layout from "@presentation/layouts/Home"
import HomeStyles from "@presentation/views/home/Styles"
import InputText from "@presentation/components/InputText"
import Loading from "@presentation/components/Loading"
import Success from "@presentation/components/buttons/Success"
import KeyboardAvoiding from "@presentation/components/keyboard/KeyboardAvoiding"
import ListViewVertical from "@presentation/components/listView/ListViewVertical"

import { colors } from "@presentation/theme/Styles"

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { search, setSearch, products, getProducts, refreshing, setRefreshing, isLoading } =
    HomeViewModel()

  useFocusEffect(
    useCallback(() => {
      getProducts()
      setRefreshing(false)
    }, []),
  )

  return (
    <Layout testID="homescreen">
      <KeyboardAvoiding>
        <View style={HomeStyles.container}>
          <InputText
            placeholder="Search..."
            value={search}
            onChangeText={text => setSearch(text)}
            placeholderTextColor={colors.black}
          />
          {isLoading && !refreshing ? (
            <Loading />
          ) : (
            <ListViewVertical data={products} getProducts={getProducts} refreshing={refreshing} />
          )}
        </View>
      </KeyboardAvoiding>
      <View style={HomeStyles.footer}>
        <Success text="Agregar" onPress={() => navigation.navigate("ProductCreate")} />
      </View>
    </Layout>
  )
}
