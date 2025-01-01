"use client"

import React from "react"

interface ButtonProps {
  label: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean // Optional disabled prop
  type?: "button" | "submit" | "reset" // Optional type prop for button
}

const Button = ({ label, onClick, icon, disabled = false, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined} // Prevent onClick if disabled
      disabled={disabled} // Native HTML disabled attribute
      className={`flex h-[45px] w-full rounded-xl px-5 py-2.5 ${
        disabled ? "cursor-not-allowed bg-[#D7D7D7] text-[#878787]" : "bg-seaGreen text-white dark:text-darksecondary justify-center"
      }`}
    >
      {label}
      {icon && <span className="ml-2 mt-1">{icon}</span>}
    </button>
  )
}

export default Button
