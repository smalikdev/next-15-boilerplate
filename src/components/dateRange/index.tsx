"use client"
import { useState, useEffect } from "react"
import { DateRangePicker } from "rsuite"
import "rsuite/dist/rsuite-no-reset.min.css"

type DateRange = [Date, Date] | null

interface DateRangeComponentProps {
  onDateChange: (range: DateRange | null) => void
  size?: "lg" | "md" | "sm" | "xs"
  dateRange?: DateRange // Optional dateRange as a prop
  useDefaultNow?: boolean // Optional boolean to set default to "now"
  useDefaultLastWeek?: boolean // Optional boolean to set default to "last week"
}

const DateRangeComponent = ({
  onDateChange,
  size = "md",
  dateRange = null,
  useDefaultNow = false,
  useDefaultLastWeek = false,
}: DateRangeComponentProps) => {
  const now = new Date()
  const lastWeek = new Date()
  lastWeek.setDate(now.getDate() - 7)

  const [selectedRange, setSelectedRange] = useState<DateRange | null>(null)

  // Sync the selectedRange state with the props whenever they change
  useEffect(() => {
    if (useDefaultNow && useDefaultLastWeek) {
      setSelectedRange([lastWeek, now])
    } else if (dateRange) {
      setSelectedRange(dateRange)
    } else {
      setSelectedRange(null)
    }
  }, [dateRange, useDefaultNow, useDefaultLastWeek])

  const disableFutureDates = (date: Date): boolean => {
    const today = new Date()
    today.setHours(23, 59, 59, 999) // End of today
    return date.getTime() > today.getTime()
  }

  const handleDateRangeChange = (value: DateRange | null) => {
    setSelectedRange(value)
    onDateChange(value)
  }

  return (
    <div className="my-4 flex">
      <DateRangePicker
        appearance="default"
        placeholder="Select Date Range"
        style={{ width: 240 }}
        size={size}
        shouldDisableDate={disableFutureDates}
        value={selectedRange} // Use selectedRange as value
        onChange={handleDateRangeChange} // Pass date change handler
        ranges={[]} // No predefined ranges
      />
    </div>
  )
}

export default DateRangeComponent
