"use client"

import React, { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import SidebarLinkGroup from "./SidebarLinkGroup"
import { getRoutes } from "./routes"
import { FaChevronDown } from "react-icons/fa"
import { AppContext } from "@/context"

interface SidebarProps {
  session: any // Adding session prop here
}

const Sidebar = ({ session }: SidebarProps) => {
  const pathname = usePathname()
  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  const [allowedModules, setAllowedModules] = useState<any[]>([])
  const { sidebarOpen, toggleSidebar } = AppContext() // Get sidebar state and toggle function from context

  // Set allowed routes based on the session
  useEffect(() => {
    const fetchRoutes = async () => {
      if (session) {
        setAllowedModules(await getRoutes(session))
      }
    }
    fetchRoutes()
  }, [session])

  // Handle sidebar open/close outside click
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return
      toggleSidebar()
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  }, [sidebarOpen, toggleSidebar])

  // Handle sidebar close on "Escape" key press
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return
      toggleSidebar()
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  }, [sidebarOpen, toggleSidebar])

  return (
    <>
      <div className="relative mt-21">
        {sidebarOpen && (
          <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-50 flex h-screen w-72.5 transform flex-col overflow-y-hidden bg-lightprimary transition-all duration-500 ease-in-out ${sidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} dark:bg-darkprimary lg:static lg:translate-x-0 lg:opacity-100`}
          >
            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
              {/* Sidebar Menu */}
              <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                <div>
                  <ul className="mb-6 flex flex-col gap-10">
                    {allowedModules.map((route: any, i: number) => {
                      const isActive = pathname === route.href

                      if (route?.children && route.children.length > 0) {
                        return (
                          <li key={i}>
                            <SidebarLinkGroup activeCondition={isActive}>
                              {(handleClick, open) => (
                                <div
                                  className={`relative ${
                                    open ? "rounded-xl border-2 border-[#eeeeee] pr-4 dark:border-[#393e48]" : ""
                                  }`}
                                >
                                  <Link
                                    href={route.href || "#"}
                                    className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-2 font-['roboto'] text-[13px] font-black duration-300 ease-in-out ${
                                      open
                                        ? "bg-lightprimary text-lightText dark:bg-transparent"
                                        : "text-lightText hover:bg-lightHover hover:text-black dark:text-darkText dark:hover:bg-darksecondary dark:hover:text-darkHeaderIcons"
                                    }`}
                                    onClick={(e) => {
                                      if (route.children) {
                                        e.preventDefault()
                                        handleClick()
                                      }
                                    }}
                                  >
                                    {route.icon}
                                    <span>{route.name}</span>
                                    {route.children && (
                                      <FaChevronDown
                                        className={`ml-auto transform transition-transform ${open ? "rotate-180" : ""}`}
                                      />
                                    )}
                                  </Link>
                                  {/* Dropdown Menu Start */}
                                  {route.children && (
                                    <div className={`transform overflow-hidden ${!open && "hidden"}`}>
                                      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        {route.children.map((croute: any, cindex: number) => (
                                          <li key={cindex}>
                                            <Link
                                              href={croute.href}
                                              className={`group relative flex h-10 items-center gap-6 rounded-xl px-4 font-calibri text-sm font-normal duration-300 ease-in-out ${
                                                pathname === croute.href
                                                  ? "bg-lightHover text-lightHeaderIcons dark:bg-darksecondary dark:text-darkHeaderIcons"
                                                  : "text-lightText hover:bg-lightHover hover:text-lightHeaderIcons dark:hover:bg-darksecondary dark:hover:text-darkHeaderIcons"
                                              }`}
                                            >
                                              <div className="group-hover:text-black">{croute.icon}</div>
                                              {croute.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  {/* Dropdown Menu End */}
                                </div>
                              )}
                            </SidebarLinkGroup>
                          </li>
                        )
                      }

                      return (
                        <li key={i}>
                          <Link
                            href={route.href}
                            className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-2 font-['roboto'] text-[13px] font-black duration-300 ease-in-out ${
                              isActive
                                ? "bg-lightHover text-lightHeaderIcons dark:bg-darksecondary dark:text-darkHeaderIcons"
                                : "text-lightText hover:bg-lightHover hover:text-lightHeaderIcons dark:text-darkText dark:hover:bg-darksecondary dark:hover:text-darkHeaderIcons"
                            }`}
                          >
                            {route.icon}
                            {route.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </nav>
              {/* Sidebar Menu */}
            </div>
          </aside>
        )}
      </div>
    </>
  )
}

export default Sidebar
