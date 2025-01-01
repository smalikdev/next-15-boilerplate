import env from "@/config/env"
import { getSession } from "next-auth/react"

export const fetchDocuments = async (searchQuery: string, axiosAuth: any) => {
  const session = await getSession()
  if (!session) {
    throw new Error("No session or token found")
  }

  const { data } = await axiosAuth.get(`${env.API_ENDPOINT}app/get-documents?id=${searchQuery}`, { cache: "no-store" })
  if (!data?.success) {
    throw new Error("Failed to documents")
  }

  return data.payload.map((doc: any) => ({
    ...doc,
    data: new Uint8Array(doc.data.data),
  }))
}
