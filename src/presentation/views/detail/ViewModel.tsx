import { useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DeleteProductsUseCase } from "@domain/useCases/products/DeleteProduct"
import { RootStackParamList } from "@presentation/navigation/MainStackNavigation"

type Props = NativeStackNavigationProp<RootStackParamList>

const DetailViewModel = (navigation: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const deleteProduct = async (id: string) => {
    setIsLoading(true)
    const result = await DeleteProductsUseCase(id)
    if (result) {
      navigation.navigate("HomeScreen")

      setIsLoading(false)
      return true
    }
    setIsLoading(false)
    return false
  }

  return {
    isLoading,
    deleteProduct,
  }
}

const DetailModalViewModel = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  return {
    visible,
    showModal,
    hideModal,
  }
}

export { DetailViewModel, DetailModalViewModel }
