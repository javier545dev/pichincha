import { useEffect, useState } from "react"
import { Product } from "@domain/entities/Product"
import { GetProductsUseCase } from "@domain/useCases/products/GetProducts"

const HomeViewModel = () => {
  const [search, setSearch] = useState("")
  const [originalProducts, setOriginalProducts] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const getProducts = async () => {
    setIsLoading(true)
    const result = await GetProductsUseCase()
    const formatResult = result.map((product: Product) => ({
      ...product,
      date_release: product.date_release,
      date_revision: product.date_revision,
    }))
    setIsLoading(false)
    setProducts(formatResult)
    setOriginalProducts(formatResult)
  }

  const filterProducts = (text: string) => {
    const filteredProducts = originalProducts.filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase()),
    )
    setProducts(filteredProducts)
  }

  useEffect(() => {
    if (search === "") {
      setProducts(originalProducts)
    } else {
      filterProducts(search)
    }
  }, [search])

  return {
    search,
    setSearch,
    isLoading,
    products,
    refreshing,
    setRefreshing,
    getProducts,
  }
}

export { HomeViewModel }
