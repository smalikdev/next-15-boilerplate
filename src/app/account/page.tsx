"use client"
import Loader from "@/components/common/Loader"
import { fetchAccountDetails } from "@/lib/service/account"
import { getRolesFromIds } from "@/utilities/getRolesFromIds"
import { useSession } from "next-auth/react"
import { useCallback, useEffect, useState } from "react"
import { FaRegUser } from "react-icons/fa"
import { HiOutlineBriefcase, HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { MdOutlineEmail } from "react-icons/md"
import { PiUserList } from "react-icons/pi" // Add this import

const User = () => {
  const [loading, setLoading] = useState<boolean>(true) // Start with loading true
  const [error, setError] = useState<string | null>(null)
  const [accountDetails, setAccountDetails] = useState<any>(null)

  const { data: sessionData } = useSession() // Get session data from useSession()
  const fetchData = useCallback(async (email: string) => {
    setLoading(true)
    setError(null)
    try {
      const accountData = await fetchAccountDetails(email)
      setAccountDetails(accountData.result) // Access the 'result' key
    } catch (error) {
      console.error("Error fetching account details:", error)
      setError("Failed to fetch account details")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (sessionData?.user?.email) {
      fetchData(sessionData.user.email) // Call fetchData with the email from session
    } else {
      setLoading(false) // Stop loading if no session data is available
      setError("No user email found in session")
    }
  }, [sessionData, fetchData])

  return (
    <>
      <div>
        {loading ? (
          <Loader /> // Render a loader while the data is being fetched
        ) : error ? (
          <p>Error: {error}</p> // Render error message if any
        ) : accountDetails ? (
          <div className="h-70 rounded-lg border-lightshadow bg-lightsecondary p-4 shadow dark:bg-darksecondary">
            <div className="text-lg font-medium text-[#000000] dark:text-[#D7D7D7]">Personal Information</div>
            <div className="mt-4 flex">
              <div className="w-1/3">
                <div className="text-sm font-medium text-[#878787] dark:text-[#616161]">User name</div>
                <div className="mt-2 flex">
                  <FaRegUser className="mr-3 mt-1 text-[#878787] dark:text-[#616161]" />
                  <div className="text-base font-normal text-[#000000] dark:text-[#d7d7d7]">
                    {accountDetails.displayName}
                  </div>
                </div>
              </div>
              <div className="flex w-1/3">
                <div className="flex items-start">
                  <div className="mt-2 h-10 border-l border-[#e9e9ef] dark:border-[#3A3F48]"></div>
                  <div className="ml-2">
                    <div className="text-sm font-medium text-[#878787] dark:text-[#616161]">Assigned Roles</div>
                    <div className="mt-2 flex items-center">
                      <PiUserList className="mr-2 text-[#878787] dark:text-[#616161]" size={20} />
                      <div className="text-base font-normal text-[#000000] dark:text-[#d7d7d7]">
                        {getRolesFromIds(accountDetails.roleIds)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/3">
                <div className="flex items-start">
                  <div className="mt-2 h-10 border-l border-[#e9e9ef] dark:border-[#3A3F48]"></div>
                  <div className="ml-2">
                    <div className="text-sm font-medium text-[#878787] dark:text-[#616161]">Email</div>
                    <div className="mt-2 flex items-center">
                      <MdOutlineEmail className="mr-2 text-[#878787] dark:text-[#616161]" size={20} />
                      <div className="text-base font-normal text-[#000000] dark:text-[#d7d7d7]">
                        {accountDetails.email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4 mt-8 border-[#e9e9ef] dark:border-[#3A3F48]" />
            <div className="mt-4 flex">
              <div className="w-1/3">
                <div className="text-sm font-medium text-[#878787] dark:text-[#616161]">Title</div>
                <div className="mt-2 flex">
                  <HiOutlineBriefcase className="mr-3 mt-1 text-[#878787] dark:text-[#616161]" />
                  <div className="text-base font-normal text-[#000000] dark:text-[#d7d7d7]">
                    {accountDetails.description}
                  </div>
                </div>
              </div>
              <div className="flex w-1/3">
                <div className="flex items-start">
                  <div className="mt-2 h-10 border-l border-[#e9e9ef] dark:border-[#3A3F48]"></div>
                  <div className="ml-2">
                    <div className="text-sm font-medium text-[#878787] dark:text-[#616161]">Company</div>
                    <div className="mt-2 flex items-center">
                      <HiOutlineBuildingOffice2 className="mr-2 text-[#878787] dark:text-[#616161]" size={20} />
                      <div className="text-base font-normal text-[#000000] dark:text-[#d7d7d7]">Tamweel</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/3"></div>
            </div>
          </div>
        ) : (
          <p className="text-red">No account details found.</p>
        )}
      </div>
    </>
  )
}

export default User
