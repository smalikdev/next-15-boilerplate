"use client"

import { useEffect, useRef, useState } from "react"

interface DropdownProps {
  options: Array<{ label: string; value: number }>
  defaultValue?: { label: string; value: number | string }
  onChange?: (selectedOption: number) => void // Callback function for change
}

const Dropdown = ({ options, defaultValue, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: number | string }>(
    defaultValue || options[0]
  )
  const trigger = useRef<HTMLButtonElement>(null)
  const dropdown = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: { label: string; value: number }) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (onChange) {
      onChange(option.value) // Notify parent of the selected option
    }
  }

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current || !trigger.current) return
      if (!isOpen || dropdown.current.contains(target as Node) || trigger.current.contains(target as Node)) return
      setIsOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  }, [isOpen])

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (keyCode === 27) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  }, [])

  return (
    <div className="relative inline-block w-full text-left">
      <button
        ref={trigger}
        onClick={toggleDropdown}
        className="flex w-full justify-between rounded-lg border border-[#e9e9ef] bg-lightsecondary px-4 py-2 font-normal shadow-sm outline-none transition focus:border-seaGreen active:border-seaGreen disabled:cursor-default disabled:bg-whiter dark:border-[#393e48] dark:bg-darkprimary dark:text-white sm:text-sm"
      >
        <div className="mt-0.5">{selectedOption.label}</div>

        <svg
          className="-mr-1 ml-2 mt-1 h-5 w-5 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={dropdown}
          className="origin-top-center absolute left-1/2 mt-2 w-full -translate-x-1/2 transform rounded-md bg-lightsecondary ring-1 ring-black ring-opacity-5 dark:bg-darksecondary"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm dark:text-white"
                role="menuitem"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
