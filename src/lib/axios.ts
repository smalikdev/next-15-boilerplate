import axios from "axios"
import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"

const BASE_URL = "http://localhost:3000"

export default axios.create({
  // baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const axiosAuth = axios.create({
  // baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const setToken = (token: string) => {
  axiosAuth.defaults.headers.common["Authorization"] = `Bearer ${token}`
}
