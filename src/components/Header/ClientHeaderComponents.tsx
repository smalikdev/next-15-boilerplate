// ClientHeaderComponents.tsx
"use client"

import DropdownNotifications from "@/components/Header/DropdownNotifications"
import useColorMode from "@/hooks/useColorMode"
import { useEffect, useState } from "react"
import DarkModeSwitcher from "./DarkModeSwitcher"
import DropdownUser from "./DropdownUser"
import FullScreenToggle from "./FullScreen"
import LanguageSwitcher from "./LanguageSwitcher"

export default function ClientHeaderComponents() {
  const [colorMode] = useColorMode()
  const [mounted, setMounted] = useState(false)

  // Prevents hydration mismatch errors
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Conditionally set the logo based on the resolved theme
  const logoSrc = colorMode === "dark" ? "/images/darklogo.svg" : "/images/logo.svg"

  return (
    <>
      <DarkModeSwitcher />
      <div className="mt-1">
        <FullScreenToggle />
      </div>
      <DropdownNotifications />
      <DropdownUser />
    </>
  )
}
