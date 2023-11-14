import { Product } from "@domain/entities/Product"
import { ApiResponse } from "@data/sources/remote/model/ApiResponse"

export interface ProductsRepository {
  getProducts(): Promise<Product[]>
  createProduct(product: Product): Promise<Product>
  updateProduct(product: Product): Promise<Product>
  deleteProduct(id: string): Promise<ApiResponse>
  validateId(id: string): Promise<ApiResponse>
}
