"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { CiLogout } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa"
import { useRouter } from "next/navigation"
import Loader from "../common/Loader"
import { LuClipboardMinus as LuUserCircle2 } from "react-icons/lu"

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // Loading state
  const router = useRouter()

  const trigger = useRef<any>(null)
  const dropdown = useRef<any>(null)

  const { data } = useSession()

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return
      setDropdownOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  const handleSignOut = async () => {
    setIsLoading(true) // Show loader
    await signOut()
    router.push("/sign-in")
  }

  return (
    <div className="relative">
      <Link ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center" href="#">
        <span className="h-12 w-12 rounded-full">
          <LuUserCircle2 size={25} className="mt-3 text-lightHeaderIcons dark:text-darkHeaderIcons" />
        </span>
        <span className="text-sm font-bold text-lightHeaderIcons dark:text-darkHeaderIcons">
          {data?.user?.displayName}
        </span>
      </Link>

      {/* Dropdown Start */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            router.push("/account")
          }}
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary dark:text-bodydark1 lg:text-base"
        >
          <FaRegUser />
          Account
        </button>

        <button
          onClick={handleSignOut}
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary dark:text-bodydark1 lg:text-base"
        >
          <CiLogout />
          Log Out
        </button>
      </div>
      {/* Dropdown End */}

      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default DropdownUser
