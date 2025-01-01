import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface InputWithIconProps {
  name: string
  placeholder?: string // Make placeholder optional
  isLoading?: boolean // Optional
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> // Accepts a React component with SVG props
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  name,
  placeholder = "", // Set default value for placeholder
  isLoading = false,
  Icon,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  // Check if placeholder is defined and convert to lower case
  const isPasswordField = (placeholder && placeholder.toLowerCase() === "password") || false

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <input
        name={name}
        className={`autofill-input w-full rounded-lg border border-[#d7d7d7] bg-lightsecondary py-2 ${Icon ? 'pl-10' : 'pl-3'} text-[#5F5F5F] focus:border-[#d7d7d7] focus:outline-none`}
        type={isPasswordField && !showPassword ? "password" : "text"}
        placeholder={isPasswordField ? "*********" : placeholder}
        disabled={isLoading}
      />
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#00424C]" width={15} height={15} />
      )}
      {isPasswordField && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <FaEye className="h-5 w-5 text-[#00424C]" />
          ) : (
            <FaEyeSlash className="h-5 w-5 text-[#00424C]" />
          )}
        </button>
      )}
    </div>
  )
}

export default InputWithIcon
