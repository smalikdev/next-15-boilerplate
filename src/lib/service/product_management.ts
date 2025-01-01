import env from "@/config/env"
import { axiosAuth } from "../axios"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"

export const fetchProductManagementDetails = async (searchQuery: string) => {
  try {
    const { data } = await axiosAuth.get(`${env.API_ENDPOINT}app/application-details?id=${searchQuery}`)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
