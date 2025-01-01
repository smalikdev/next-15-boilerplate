import { axiosAuth } from "../axios"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"
import env from "@/config/env"

export const getUsers = async () => {
  try {
    const { data } = await axiosAuth.get(`${env.API_ENDPOINT}app/get-user`)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

// add user
export const addUser = async (user: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/add-user`, user)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

// update user
export const updateUser = async (user: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/update-user`, user)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

// delete user
export const deleteUser = async (user: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/delete-user`, user)
    return data.result
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
