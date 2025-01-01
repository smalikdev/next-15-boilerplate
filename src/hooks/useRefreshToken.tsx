import { useSession } from "next-auth/react"
import { useEffect } from "react"
import axios, { axiosAuth } from "../lib/axios"

const useRefreshToken = () => {
  const { data: session } = useSession()

  const refreshToken = async () => {
    const res = await axios.post("/api/auth/refresh", {
      headers: {
        Authorization: `Bearer ${session?.user.refresh_token}`,
      },
    })
    if (session) {
      session.user.access_token = res.data.access_token
      session.user.refresh_token = res.data.refresh_token
    }
  }
  useEffect(() => {}, [session])

  return refreshToken
}

export default useRefreshToken
