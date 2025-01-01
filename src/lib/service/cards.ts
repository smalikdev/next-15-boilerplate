import env from "@/config/env"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"

// export interface DashboardCardDetailsResponse {
//   success: boolean
//   result: {
//     registeredCustomers: number
//     appliedApplications: number
//     submittedApplications: number
//     acceptedOffers: number
//     generatedContracts: number
//   }
// }

export const fetchDashboardCardDetails = async (searchDate: string, token: any) => {
  try {
    const response = await fetch(`${env.API_ENDPOINT}app/dashboard-card-details?searchDate=${searchDate}`, {
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
