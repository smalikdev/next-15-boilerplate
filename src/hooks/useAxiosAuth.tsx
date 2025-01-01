import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { axiosAuth } from "../lib/axios"
// import useRefreshToken from "./useRefreshToken";

const useAxiosAuth = () => {
  const { data: session }: any = useSession()
  // const refreshToken = useRefreshToken();

  useEffect(() => {
    if (session?.user?.access_token) {
      const requestInterceptor = axiosAuth.interceptors.request.use(
        (config) => {
          if (!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${session?.user?.access_token}`
          }
          return config
        },
        (error) => Promise.reject(error)
      )

      const responseInterceptor = axiosAuth.interceptors.response.use(
        (resp) => resp,
        async (error) => {
          console.log(error?.response, "error--------------------------------error")
          const prevRequest = error.config
          if (error.response.status === 401 && !prevRequest.sent) {
            prevRequest.sent = true
            // await refreshToken();
            prevRequest.headers["Authorization"] = `Bearer ${session?.user.access_token}`
            return axiosAuth(prevRequest)
          }
          return Promise.reject(error)
        }
      )

      return () => {
        //cleanup function
        axiosAuth.interceptors.request.eject(requestInterceptor)
        axiosAuth.interceptors.request.eject(responseInterceptor)
      }
    }
  }, [session?.user])

  return axiosAuth
}
export default useAxiosAuth
