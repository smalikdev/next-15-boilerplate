"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { FaRegUser } from "react-icons/fa6"
import { MdOutlineLockPerson } from "react-icons/md"
import InputWithIcon from "@/components/Input"

export default function SignIn() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  return (
    <div className="flex h-screen">
      {/* Left side for the login form */}
      <div className="flex w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <img className="w-50" src="/images/logo.svg" alt="Logo" />
          <p className="mb-6 mt-6 font-calibri text-lg font-light text-[#5F5F5F]">
            Please enter your username and password
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              setIsLoading(true)
              setError("")
              try {
                const formData = new FormData(e.currentTarget)
                const response = await signIn("credentials", {
                  username: formData.get("username"),
                  password: formData.get("password"),
                  redirect: false, // Handle redirect manually
                  callbackUrl: `${window.location.origin}/ticket`,
                })

                if (response?.error) throw new Error(response.error)

                if (response && response.ok && response.url) {
                  router.push(response.url)
                }
              } catch (error) {
                setError(error instanceof Error ? error.message : "Invalid Credentials.")
              } finally {
                setIsLoading(false)
              }
            }}
          >
            <div className="mb-4">
              <div className="mb-3 font-calibri text-sm font-normal text-[#5F5F5F]">Username</div>
              <InputWithIcon
                name="username"
                placeholder="example@tamweel-aloula.com"
                isLoading={false}
                Icon={FaRegUser}
              />
              <div className="my-3 font-calibri text-sm font-normal text-[#5F5F5F]">Password</div>
              <InputWithIcon name="password" placeholder="Password" isLoading={false} Icon={MdOutlineLockPerson} />
            </div>
            <button
              className="flex w-full items-center justify-center rounded-lg bg-seaGreen px-4 py-2 text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner-border inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                "Enter"
              )}
            </button>
            <p className="text-red-500 mt-2 text-center">{error}</p>
          </form>
        </div>
      </div>

      {/* Right side with background */}

      <div className="relative h-screen w-1/2 overflow-hidden">
        {/* Image Section */}
        <div className="absolute inset-0">
          <img
            src="/images/laptop.svg" // replace this with the actual path to the laptop image
            alt="Laptop on Desk"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Teal Top Section */}
        <div
          className="absolute left-0 top-0 h-full w-full bg-[#D7D7D7]"
          style={{ clipPath: "polygon(0 0, 180% 0, 0 50%)" }}
        >
          <div
            className="absolute left-0 top-0 h-full w-full bg-seaGreen"
            style={{ clipPath: "polygon(0 0, 175% 0, 0 47%)" }}
          ></div>
        </div>

        {/* Yellow Bottom Section */}
        <div
          className="absolute bottom-0 right-0 h-full w-[30rem] bg-[#D7D7D7]"
          style={{ clipPath: "polygon(100% 100%, 100% 50%, 0 100%)" }}
        >
          <div
            className="absolute bottom-0 right-0 w-[30rem] bg-[#F9C416]"
            style={{
              height: "94%", // Adjust this value to make the yellow div smaller
              clipPath: "polygon(100% 100%, 100% 50%, 0 103%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
