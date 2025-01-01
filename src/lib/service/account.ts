import env from "@/config/env"
import { axiosAuth } from "../axios"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"

export const fetchAccountDetails = async (email: string) => {
  try {
    const { data } = await axiosAuth.get(`${env.API_ENDPOINT}app/user-info?email=${email}`)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
