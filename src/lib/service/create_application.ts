import env from "@/config/env"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"
import { axiosAuth } from "../axios"

export const addApplication = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/add-application`, payload)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
