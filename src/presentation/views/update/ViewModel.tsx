import { useState } from "react"
import { Product } from "@src/domain/entities/Product"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "@src/presentation/navigation/MainStackNavigation"
import { UpdateProductsUseCase } from "@src/domain/useCases/products/UpdateProduct"

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>
  product: Product
}

const UpdateViewModel = ({ navigation, product }: Props) => {
  const [values, setValues] = useState({
    id: product.id,
    name: product.name,
    description: product.description,
    logo: product.logo,
    date_release: product.date_release,
    date_revision: product.date_revision,
  })
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const onChange = (property: string, value: any) => {
    setValues(prev => ({ ...prev, [property]: value }))
  }

  const submit = async () => {
    setLoading(true)
    const result = await UpdateProductsUseCase(values)
    if (result.id) {
      setSuccessMessage("Registro creado correctamente")
      setErrorMessage("")
      navigation.navigate("HomeScreen")
    }
  }

  return {
    ...values,
    onChange,
    submit,
    errorMessage,
    successMessage,
    loading,
  }
}

export { UpdateViewModel }
