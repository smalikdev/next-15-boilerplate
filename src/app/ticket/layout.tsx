
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import SessionLoader from "@/components/SessionLoader"
import React from "react"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DefaultLayout>
        <SessionLoader>
          {children}
          {/* <ToastContainer position="bottom-right"></ToastContainer> */}
        </SessionLoader>
      </DefaultLayout>
    </>
  )
}
