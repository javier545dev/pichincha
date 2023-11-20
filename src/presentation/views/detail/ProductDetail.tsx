import React from "react"
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
import Body from "@presentation/components/sections/Body"
import Footer from "@presentation/components/sections/Footer"
import Scroll from "@presentation/components/carousel/Scroll"

import TransformDate from "@presentation/utils/TransformDate"

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
      <Scroll>
        <HeaderTitleWithData title={`ID: ${id}`} subtitle="Información extra" />
        <Body>
          <TextWithLabel label="Nombre" data={name} />
          <TextWithLabel label="Descripción" data={description} />
          <ImageWithTitle label="Logo" url={logo} />
          <TextWithLabel
            label="Fecha de lanzamiento"
            data={TransformDate(new Date(date_release))}
          />
          <TextWithLabel label="Fecha de revisión" data={TransformDate(new Date(date_revision))} />
        </Body>
      </Scroll>
      <ModalWithText
        visible={visible}
        transparent={true}
        animationType={"slide"}
        onRequestClose={() => hideModal()}
        title={`¿Estás seguro de eliminar el producto ${id} ?`}>
        <Success text={"Confirmar"} onPress={() => deleteProduct(id)} />
        <Neutral text={"Cancelar"} onPress={() => hideModal()} />
      </ModalWithText>
      <Footer>
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
      </Footer>
    </Layout>
  )
}
