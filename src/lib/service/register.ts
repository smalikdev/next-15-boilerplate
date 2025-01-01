import env from "@/config/env"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"
import { axiosAuth } from "../axios"

export const validateId = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/validate-id`, payload)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

export const getStatus = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/get-status`, payload)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

export const validateTahqooqInfo = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/validate-tahqoq-info`, payload)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

export const register = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/register`, payload)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

export const sendTermsAndCond = async (payload: any) => {
  try {
    const { data } = await axiosAuth.post(`${env.API_ENDPOINT}app/send-terms-and-conditions`, payload)
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}

export const verifyTermsAndCond = async (payload: any) => {
  try {
    const { data } = await axiosAuth.get(
      `${env.API_ENDPOINT}app/verify-terms-and-conditions?iqamaId=${payload.iqamaId}`
    )
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
