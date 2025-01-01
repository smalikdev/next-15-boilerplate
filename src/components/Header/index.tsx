"use client"
import Image from "next/image"
import ClientHeaderComponents from "./ClientHeaderComponents"
import { AppContext } from "@/context"

export default function Header() {
  const { sidebarOpen, toggleSidebar } = AppContext()
  const logoSrc = "/images/logo.svg"

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-lightprimary shadow shadow-lightshadow dark:bg-darkprimary dark:shadow">
      <div className="flex w-full items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-0">
          {/* Sidebar Toggle Button */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation()
              toggleSidebar() // Use the context's toggleSidebar function
            }}
            className="z-99999 ml-2 mr-10 block rounded-full border-lightshadow bg-lightsecondary p-2 shadow dark:bg-darksecondary"
          >
            <span className="relative mt-1 block h-6 w-7 cursor-pointer px-1">
              <span className="du-block absolute right-0 mr-1 h-full w-5">
                {/* Top Line */}
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-lightHeaderIcons delay-[0] duration-200 ease-in-out dark:bg-darkHeaderIcons ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                {/* Middle Line */}
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-lightHeaderIcons delay-150 duration-200 ease-in-out dark:bg-darkHeaderIcons ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                {/* Bottom Line */}
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-lightHeaderIcons delay-200 duration-200 ease-in-out dark:bg-darkHeaderIcons ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              {/* Cross for closing */}
              <span className="absolute right-0 h-5 w-full rotate-45">
                {/* Left diagonal line */}
                <span
                  className={`absolute left-3 top-0.5 block h-full w-0.5 rounded-sm bg-lightHeaderIcons delay-300 duration-200 ease-in-out dark:bg-darkHeaderIcons ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                {/* Right diagonal line */}
                <span
                  className={`delay-400 absolute left-1 top-2.5 block h-0.5 w-5 rounded-sm bg-lightHeaderIcons duration-200 ease-in-out dark:bg-darkHeaderIcons ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>

          {/* Logo */}
          <div className="mr-25 flex flex-col">
            <Image src={logoSrc} alt="logo" width={120} height={120} />
          </div>
        </div>

        {/* Right side client-side elements */}
        <div className="flex items-center gap-3 2xsm:gap-4">
          <ClientHeaderComponents />
        </div>
      </div>
    </header>
  )
}
