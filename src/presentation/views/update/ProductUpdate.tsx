import React from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "@presentation/navigation/MainStackNavigation"
import { UpdateViewModel } from "@presentation/views/update/ViewModel"
import { Product as ProductInterface } from "@domain/entities/Product"

import Layout from "@presentation/layouts/Home"
import InputTextWithLabel from "@presentation/components/inputs/InputTextWithLabel"
import Success from "@presentation/components/buttons/Success"
import Neutral from "@presentation/components/buttons/Neutral"
import KeyboardAvoiding from "@presentation/components/keyboard/KeyboardAvoiding"
import ModalDatePicker from "@presentation/components/modals/ModalDatePicker"
import ButtonWithLabel from "@src/presentation/components/ButtonWithLabel"
import ViewWithLabel from "@src/presentation/components/ViewWithLabel"
import TransformDateWithYear from "@presentation/utils/TransformDateWithYear"
import TransformDate from "@src/presentation/utils/TransformDate"
import LoadingCenter from "@src/presentation/components/LoadingCenter"
import Header from "@presentation/components/header/Header"
import Body from "@presentation/components/sections/Body"
import Footer from "@presentation/components/sections/Footer"
import Scroll from "@presentation/components/carousel/Scroll"
import { useModalVisible } from "@src/presentation/hooks/useModalVisible"

interface Props {
  route: { params: ProductInterface }
}

export default function ProductUpdate({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { id, name, description, logo, date_release, date_revision, onChange, submit, loading } =
    UpdateViewModel({
      navigation,
      product: route.params,
    })
  const { visible, closeModal, openModal } = useModalVisible()

  return (
    <Layout>
      {loading && <LoadingCenter />}
      <KeyboardAvoiding>
        <Scroll>
          <Header>Editar Registro</Header>
          <Body>
            <InputTextWithLabel
              label="ID"
              placeholder="ID"
              required
              value={id}
              type="id"
              editable={false}
              maxLength={100}
              onChangeText={text => onChange("id", text)}
            />
            <InputTextWithLabel
              label="Nombre"
              placeholder="Nombre"
              type="name"
              required
              maxLength={100}
              value={name}
              onChangeText={text => onChange("name", text)}
            />
            <InputTextWithLabel
              label="Descripción"
              placeholder="Descripción"
              value={description}
              maxLength={200}
              type="description"
              required
              onChangeText={text => onChange("description", text)}
            />
            <InputTextWithLabel
              label="Logo"
              type="logo"
              required
              placeholder="Logo"
              value={logo}
              error=""
              onChangeText={text => onChange("logo", text)}
            />

            <ButtonWithLabel
              label="Fecha de lanzamiento"
              value={TransformDate(new Date(date_release))}
              onPress={openModal}
            />

            <ViewWithLabel
              label="Fecha de revisión"
              value={TransformDate(new Date(date_revision))}
            />

            <ModalDatePicker
              visible={visible}
              transparent={true}
              animationType="slide"
              current={date_release}
              onRequestClose={closeModal}
              onChange={date => {
                const _date = new Date(date.replaceAll("/", "-"))
                onChange("date_release", _date)
                onChange("date_revision", TransformDateWithYear(_date, 1))
                closeModal()
              }}
            />
          </Body>
        </Scroll>
      </KeyboardAvoiding>
      <Footer>
        <Success
          text="Enviar"
          onPress={submit}
          disabled={!id || !name || !description || !logo || !date_release || !date_revision}
        />
        <Neutral text="Volver" onPress={navigation.goBack} />
      </Footer>
    </Layout>
  )
}
