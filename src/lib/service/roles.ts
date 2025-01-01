import { axiosAuth } from "../axios"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"
import env from "@/config/env"

export const getRoles = async () => {
  try {
    const { data } = await axiosAuth.get(`${env.API_ENDPOINT}app/get-role`)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

export const addRole = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/add-role`, payload)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

// update

export const editRole = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/update-role`, payload)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

//delete

export const deleteRole = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/delete-role`, payload)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
