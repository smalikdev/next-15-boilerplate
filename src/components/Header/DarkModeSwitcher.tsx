import useColorMode from "@/hooks/useColorMode"
import { FaRegMoon } from "react-icons/fa"
import { FiSun } from "react-icons/fi"

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <label
      className={`relative block h-8 w-16 cursor-pointer rounded-full border-lightshadow shadow ${
        colorMode === "dark" ? "bg-darksecondary" : "bg-lightsecondary"
      }`}
    >
      <input
        type="checkbox"
        onChange={() => {
          if (typeof setColorMode === "function") {
            setColorMode(colorMode === "light" ? "dark" : "light")
          }
        }}
        className="sr-only"
      />
      <div
        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-lightHeaderIcons shadow transition-transform duration-300 ease-in-out ${
          colorMode === "dark" ? "translate-x-8 transform bg-white" : ""
        }`}
      ></div>
      <div
        className={`absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full ${
          colorMode === "dark"
            ? "left-1 top-1 flex items-center justify-center transition-transform duration-300 ease-in-out"
            : ""
        }`}
      >
        {colorMode === "dark" ? <FaRegMoon className="text-[#f59e0b]" /> : <FiSun className="text-[#f59e0b]" />}
      </div>
    </label>
  )
}

export default DarkModeSwitcher
