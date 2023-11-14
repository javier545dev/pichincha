import React from "react"
import { View, ScrollView } from "react-native"
import { Product as ProductInterface } from "@domain/entities/Product"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { DetailModalViewModel, DetailViewModel } from "@presentation/views/detail/ViewModel"
import { RootStackParamList } from "@presentation/navigation/MainStackNavigation"

import Layout from "@presentation/layouts/Home"
import HeaderTitleWithData from "@presentation/components/HeaderTitleWithData"
import TextWithLabel from "@presentation/components/TextWithLabel"
import ImageWithTitle from "@presentation/components/ImageWithTitle"
import Neutral from "@presentation/components/buttons/Neutral"
import Danger from "@presentation/components/buttons/Danger"
import Success from "@presentation/components/buttons/Success"
import ModalWithText from "@presentation/components/Modal"
import LoadingCenter from "@presentation/components/LoadingCenter"
import ProductDetailStyles from "@presentation/views/detail/Styles"
import TransformDate from "@src/presentation/utils/TransformDate"

interface Props {
  route: { params: ProductInterface }
}

export default function ProductDetail({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { id, name, description, logo, date_release, date_revision } = route?.params
  const { isLoading, deleteProduct } = DetailViewModel(navigation)
  const { visible, showModal, hideModal } = DetailModalViewModel()

  return (
    <Layout testID="detailscreen">
      {isLoading && <LoadingCenter />}
      <ScrollView contentContainerStyle={ProductDetailStyles.container}>
        <HeaderTitleWithData title={`ID: ${id}`} subtitle="Información extra" />
        <View style={ProductDetailStyles.body}>
          <TextWithLabel label="Nombre" data={name} />
          <TextWithLabel label="Descripción" data={description} />
          <ImageWithTitle label="Logo" url={logo} />
          <TextWithLabel
            label="Fecha de lanzamiento"
            data={TransformDate(new Date(date_release))}
          />
          <TextWithLabel label="Fecha de revisión" data={TransformDate(new Date(date_revision))} />
        </View>
      </ScrollView>
      <ModalWithText
        visible={visible}
        transparent={true}
        animationType={"slide"}
        onRequestClose={() => hideModal()}
        title={`¿Estás seguro de eliminar el producto ${id} ?`}>
        <Success text={"Confirmar"} onPress={() => deleteProduct(id)} />
        <Neutral text={"Cancelar"} onPress={() => hideModal()} />
      </ModalWithText>
      <View style={ProductDetailStyles.footer}>
        <Neutral
          text="Editar"
          onPress={() =>
            navigation.navigate("ProductUpdate", {
              id,
              name,
              description,
              logo,
              date_release,
              date_revision,
            })
          }
        />
        <Danger text="Eliminar" onPress={() => showModal()} />
      </View>
    </Layout>
  )
}
