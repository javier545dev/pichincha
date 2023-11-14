import { AxiosError } from "axios"
import { ProductsRepository } from "@domain/repositories/ProductsRepository"
import { ApiPichincha } from "@data/sources/remote/api/Api"

export class ProductsRepositoryImpl implements ProductsRepository {
  async getProducts() {
    try {
      const response = await ApiPichincha.get("/bp/products")
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve([])
    }
  }

  async createProduct(product: any) {
    try {
      const response = await ApiPichincha.post("/bp/products", product)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }

  async updateProduct(product: any) {
    try {
      const response = await ApiPichincha.put("/bp/products", product)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }

  async deleteProduct(id: string) {
    try {
      const response = await ApiPichincha.delete(`/bp/products?id=${id}`)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }

  async validateId(id: string) {
    try {
      const response = await ApiPichincha.get(`/bp/products/verification?id=${id}`)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = error as AxiosError
      console.log("ERROR: " + JSON.stringify(e.response?.data))
      return Promise.resolve({})
    }
  }
}
