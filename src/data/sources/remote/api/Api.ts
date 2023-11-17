import axios from "axios"
import { BASE_URL, AUTHOR_ID } from "@env"

const ApiPichincha = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? BASE_URL : BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    authorId: AUTHOR_ID,
  },
})

export { ApiPichincha }
