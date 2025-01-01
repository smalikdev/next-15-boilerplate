"use client"

import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from "react"
import { ContextProvider } from "@/context"

interface Props {
  children: ReactNode
}
function Provider({ children }: Props) {
  return (
    <SessionProvider>
      <ContextProvider>{children}</ContextProvider>
    </SessionProvider>
  )
}

export default Provider
