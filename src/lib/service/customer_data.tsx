import env from "@/config/env"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"

export const fetchCustomerDetails = async (id: string, token: any) => {
  try {
    const response = await fetch(`${env.API_ENDPOINT}app/customer-details?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
