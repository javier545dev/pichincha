import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "@presentation/navigation/MainStackNavigation"
import { CreateViewModel } from "@presentation/views/create/ViewModel"

import Layout from "@presentation/layouts/Home"
import InputTextWithLabel from "@presentation/components/inputs/InputTextWithLabel"
import Success from "@presentation/components/buttons/Success"
import Neutral from "@presentation/components/buttons/Neutral"
import KeyboardAvoiding from "@presentation/components/keyboard/KeyboardAvoiding"
import ProductCreateStyles from "@presentation/views/create/Styles"
import ModalDatePicker from "@presentation/components/modals/ModalDatePicker"
import ButtonWithLabel from "@presentation/components/ButtonWithLabel"
import ViewWithLabel from "@presentation/components/ViewWithLabel"
import LoadingCenter from "@presentation/components/LoadingCenter"

import TransformDateWithYear, {
  TransformDateWithYearString,
} from "@presentation/utils/TransformDateWithYear"

export default function ProductCreate() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const {
    id,
    name,
    description,
    logo,
    date_release,
    date_revision,
    onChange,
    resetForm,
    submit,
    loading,
  } = CreateViewModel({
    navigation,
  })
  const [visible, setVisible] = useState(false)

  return (
    <Layout testID="createscreen">
      {loading && <LoadingCenter />}
      <KeyboardAvoiding>
        <ScrollView contentContainerStyle={ProductCreateStyles.container}>
          <Text style={ProductCreateStyles.title}>Formulario de Registro</Text>
          <View style={ProductCreateStyles.section}>
            <InputTextWithLabel
              label="ID"
              placeholder="ID"
              required
              value={id}
              type="id"
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
              value={TransformDateWithYearString(date_release)}
              onPress={() => setVisible(true)}
            />

            <ViewWithLabel
              label="Fecha de revisión"
              value={TransformDateWithYearString(date_revision)}
            />

            <ModalDatePicker
              visible={visible}
              transparent={true}
              animationType="slide"
              current={date_release}
              onRequestClose={() => setVisible(false)}
              onChange={date => {
                const _date = new Date(date.replaceAll("/", "-"))
                onChange("date_release", _date)
                onChange("date_revision", TransformDateWithYear(_date, 1))
                setVisible(false)
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoiding>
      <View style={ProductCreateStyles.footer}>
        <Success
          text="Enviar"
          onPress={submit}
          disabled={!id || !name || !description || !logo || !date_release || !date_revision}
        />
        <Neutral text="Reiniciar" onPress={resetForm} />
      </View>
    </Layout>
  )
}
