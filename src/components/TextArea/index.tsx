import React from "react";

interface TextAreaProps {
  value?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  value = "",
  placeholder = "Enter text...",
  rows = 4,
  disabled = false,
  error = "",
  success = false,
  onChange,
}) => {
  const baseClasses =
    "w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all";
  const borderClasses = error
    ? "border-red-500 focus:ring-red-300"
    : success
      ? "border-green-500 focus:ring-green-300"
      : "border-gray-300 focus:ring-blue-300";
  const disabledClasses = disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white";

  return (
    <div className="flex flex-col space-y-1">
      <textarea
        className={`${baseClasses} ${borderClasses} ${disabledClasses}`}
        value={value}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {success && !error && <p className="text-xs text-green-500">Success</p>}
    </div>
  );
};

export default TextArea;
