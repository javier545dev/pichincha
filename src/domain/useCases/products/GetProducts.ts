import { ProductsRepositoryImpl } from "@data/repositories/ProductsRepository"

const { getProducts } = new ProductsRepositoryImpl()

export const GetProductsUseCase = async () => {
  return await getProducts()
}
