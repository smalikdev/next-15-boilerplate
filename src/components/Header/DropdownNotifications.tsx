"use client"
import { useEffect, useRef, useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { CiBellOn } from "react-icons/ci"
import { useRouter } from "next/navigation"
import { HiOutlineBell } from "react-icons/hi2"

// import useAxiosAuth from "../../hooks/useAxiosAuth";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()
  const [list, setList] = useState([])
  const [error, setError] = useState(null)
  // const axiosAuth = useAxiosAuth();

  const trigger = useRef<any>(null)
  const dropdown = useRef<any>(null)

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

  // useEffect(() => {
  //   setTimeout(fetchNotifications, 1000);
  // }, []);

  // async function fetchNotifications() {
  //   try {
  //     const resp = await findAllNotifications({ axiosAuth });

  //     if (!resp.error) {
  //       setList(resp.data);
  //     }
  //   } catch (ex: any) {
  //     setError(ex.message);
  //   }
  // }

  return (
    <div className="relative">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={"block rounded-full border-lightshadow bg-lightsecondary p-2 shadow dark:bg-darksecondary"}
      >
        <HiOutlineBell size={25} className="text-lightHeaderIcons dark:text-darkHeaderIcons" />
      </div>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <>
          {error && <p className="text-red">{error}</p>}

          {list?.length === 0 && (
            <div className={"p-4 text-center dark:text-bodydark1"}>
              <p>No List Found</p>
            </div>
          )}

          {list?.map((notif: any) => {
            return (
              <button
                key={notif.id}
                onClick={() => {
                  router.push("/notifications")
                }}
                className="flex items-center gap-3.5 border-b border-b-[#F7F7F7] px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <CiBellOn />

                {notif.isSerialized && <p>{JSON.parse(notif.message).message}</p>}
                {!notif.isSerialized && <p>{notif.message}</p>}
              </button>
            )
          })}

          <button
            onClick={() => {
              router.push("/notifications")
            }}
            className="m-2 rounded-md bg-primary p-2 text-center font-bold text-white dark:bg-body"
          >
            <p>Show All</p>
          </button>
        </>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
