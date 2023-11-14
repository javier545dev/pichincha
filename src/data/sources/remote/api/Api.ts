import axios from "axios"

const ApiPichincha = axios.create({
  baseURL:
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    authorId: "1234",
  },
})

export { ApiPichincha }
