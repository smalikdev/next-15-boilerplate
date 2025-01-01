"use server"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Header from "../Header"
import Sidebar from "../Sidebar"

export default async function DefaultLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options) // Fetch the session server-side

  return (
    <div className="flex h-screen overflow-hidden dark:bg-darkprimary">
      <Sidebar session={session} />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main className="pt-[72px]">
          <div className="mx-auto min-h-screen max-w-screen-2xl p-4 dark:bg-darkprimary md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
