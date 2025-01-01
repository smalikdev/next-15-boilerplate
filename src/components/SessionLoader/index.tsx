"use client"
// SessionLoader.tsx
import { setToken } from "@/lib/axios"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

const SessionLoader = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const session = useSession()
  const pathname = usePathname()

  useEffect(() => {
    if (session.status === "authenticated") {
      setToken(session.data?.user.access_token)
    }
    if (session.status === "unauthenticated") {
      // Redirect to login page or handle unauthorized access
      // router.push("/sign-in")
    }
  }, [session, router])
  useEffect(() => {
    const timer = setTimeout(() => {}, 5000) // 5 seconds

    // Cleanup the timer if the component unmounts or session changes
    return () => clearTimeout(timer)
  }, [session])
  if (session.status === "loading") {
    return <div className="loading" />
  }

  return <>{children}</>
}

export default SessionLoader
