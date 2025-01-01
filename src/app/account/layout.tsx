import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import "@/css/satoshi.css"
import "@/css/style.css"
import React from "react"
// import { ToastContainer } from "// import { toast } from "react - toastify""
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import SessionLoader from "../../components/SessionLoader"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <>
        <DefaultLayout>
          <SessionLoader>
            <Breadcrumb pageName="Account Information"></Breadcrumb>
            {children}
            {/* <ToastContainer position="bottom-right"></ToastContainer> */}
          </SessionLoader>
        </DefaultLayout>
      </>
    </>
  )
}
