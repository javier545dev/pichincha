import { AxiosError } from "axios"
import { ProductsRepository } from "@domain/repositories/ProductsRepository"
import { ApiPichincha } from "@data/sources/remote/api/Api"
import { Product } from "@domain/entities/Product"
import { paths } from "@presentation/constants/Paths"

export class ProductsRepositoryImpl implements ProductsRepository {
  async getProducts() {
    try {
      const response = await ApiPichincha.get(paths.GET_PRODUCTS)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve([])
    }
  }

  async createProduct(product: Product) {
    try {
      const response = await ApiPichincha.post(paths.CREATE_PRODUCT, product)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }

  async updateProduct(product: Product) {
    try {
      const response = await ApiPichincha.put(paths.UPDATE_PRODUCT, product)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }

  async deleteProduct(id: string) {
    try {
      const response = await ApiPichincha.delete(`${paths.DELETE_PRODUCT}${id}`)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }

  async validateId(id: string) {
    try {
      const response = await ApiPichincha.get(`${paths.VALIDATE_ID}${id}`)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }
}
