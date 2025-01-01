"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const { data: session } = useSession()

  if (!session?.user?.access_token) {
    // router.push("/sign-in")
  } else {
    router.push("/ticket")
  }
  return (
    <>
      <h1>Tamweel Internal Portal</h1>
    </>
  )
}
