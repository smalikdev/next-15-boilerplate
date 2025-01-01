"use client"

import Loader from "@/components/common/Loader"
import "@/css/satoshi.css"
import "@/css/style.css"
import React, { useEffect, useState } from "react"

// import "// import { toast } from "react-toastify"/dist/ReactToastify.css"
import Provider from "./Provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loading, setLoading] = useState<boolean>(true)

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <html lang="en">
      <title>Tamweel</title>
      <meta name="description" content="Tamweel Internal Portal" />
      <body suppressHydrationWarning={true}>
        <Provider>{loading ? <Loader /> : children}</Provider>
      </body>
    </html>
  )
}
