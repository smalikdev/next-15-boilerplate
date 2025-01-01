"use client"
import { useEffect, useRef, useState } from "react"
import { FaRegEnvelope } from "react-icons/fa"
import { useRouter } from "next/navigation"
// import useAxiosAuth from "../../hooks/useAxiosAuth";

const DropdownMessages = () => {
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
      if (!dropdownOpen || dropdown.current?.contains(target) || trigger.current?.contains(target)) return
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

  return (
    <div className="relative">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={
          "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2 border-strokedark bg-[white]"
        }
      >
        <FaRegEnvelope className={"text-xl font-light text-primary"} size={25} />
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
                onClick={() => {}}
                className="flex items-center gap-3.5 border-b border-b-[#F7F7F7] px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <FaRegEnvelope />
                {notif.isSerialized && <p>{JSON.parse(notif.message).message}</p>}
                {!notif.isSerialized && <p>{notif.message}</p>}
              </button>
            )
          })}

          <button
            onClick={() => {}}
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

export default DropdownMessages
