import env from "@/config/env"
import { axiosAuth } from "../axios"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"

// export interface DashboardDataResponse {
//   success: boolean
//   result: {
//     categories: string[]
//     series: any[]
//   }
//   axiosAuth: any
// }

export const fetchDashboardData = async (fromDate: string, toDate: string, token: any) => {
  try {
    const response = await fetch(`${env.API_ENDPOINT}app/dashboard-chart-details?to=${toDate}&from=${fromDate}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Replace yourAuthToken with the actual token
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
