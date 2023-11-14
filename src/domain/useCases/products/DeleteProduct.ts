import { ProductsRepositoryImpl } from "@data/repositories/ProductsRepository"

const { deleteProduct } = new ProductsRepositoryImpl()

export const DeleteProductsUseCase = async (id: string) => {
  return await deleteProduct(id)
}
