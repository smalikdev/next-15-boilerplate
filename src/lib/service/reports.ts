import env from "@/config/env"
import { axiosErrorHandler } from "@/utilities/axiosErrorHandler"
import { formatDate } from "@/utilities/formatDate"
import { axiosAuth } from "../axios"

export const getReports = async (dateRange: [Date, Date] | undefined, requestedReport: number | undefined) => {
  try {
    // Check if dateRange is defined and contains two dates
    if (!dateRange || dateRange.length !== 2 || !dateRange[0] || !dateRange[1]) {
      throw new Error("Invalid date range provided.")
    }

    // Extract the from and to dates from dateRange
    const fromDate = formatDate(dateRange[0])
    const toDate = formatDate(dateRange[1])

    const { data } = await axiosAuth.get(
      `${env.API_ENDPOINT}app/reports?requestedReport=${requestedReport}&to=${toDate}&from=${fromDate}`
    )

    return data
  } catch (ex: any) {
    return axiosErrorHandler(ex)
  }
}
