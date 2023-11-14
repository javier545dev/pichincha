import { ProductsRepositoryImpl } from "@data/repositories/ProductsRepository"

const { validateId } = new ProductsRepositoryImpl()

export const GetValidateId = async (id: string) => {
  return await validateId(id)
}
