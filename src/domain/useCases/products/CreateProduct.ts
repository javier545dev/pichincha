import { Product } from "@domain/entities/Product"
import { ProductsRepositoryImpl } from "@data/repositories/ProductsRepository"

const { createProduct } = new ProductsRepositoryImpl()

export const CreateProductsUseCase = async (product: Product) => {
  return await createProduct(product)
}
