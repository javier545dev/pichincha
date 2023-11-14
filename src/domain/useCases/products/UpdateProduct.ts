import { Product } from "@domain/entities/Product"
import { ProductsRepositoryImpl } from "@data/repositories/ProductsRepository"

const { updateProduct } = new ProductsRepositoryImpl()

export const UpdateProductsUseCase = async (product: Product) => {
  return await updateProduct(product)
}
