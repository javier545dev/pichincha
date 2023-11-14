import { useState } from "react"
import { Product } from "@domain/entities/Product"
import { CreateProductsUseCase } from "@domain/useCases/products/CreateProduct"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "@src/presentation/navigation/MainStackNavigation"

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const CreateViewModel = ({ navigation }: Props) => {
  const [values, setValues] = useState<Product>({
    id: "",
    name: "",
    description: "",
    logo: "",
    date_release: new Date(),
    date_revision: new Date(),
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const onChange = (property: string, value: any) => {
    setValues(prev => ({ ...prev, [property]: value }))
  }

  const submit = async () => {
    setLoading(true)
    const result = await CreateProductsUseCase(values)
    if (result.id) {
      setSuccessMessage("Registro creado correctamente")
      setErrorMessage("")
      navigation.navigate("HomeScreen")
      resetForm()
    }
  }

  const resetForm = () => {
    setValues({
      id: "",
      name: "",
      description: "",
      logo: "",
      date_release: new Date(),
      date_revision: new Date(),
    })
  }

  return {
    ...values,
    onChange,
    submit,
    errorMessage,
    successMessage,
    loading,
    resetForm,
  }
}

export { CreateViewModel }
