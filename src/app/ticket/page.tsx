"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
// import Button from "@/components/Button"
import Loader from "@/components/common/Loader"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CreateTicketModal from "./createTicket"
import { DatePickerDemo } from "./DateRange"
import { SelectDemo } from "./Select"
import TicketsList from "./TicketsList"

const TicketsPage = () => {
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [dateRange, setDateRange] = useState<any | null>(null) // Initially null
  const [selectValue, setSelectValue] = useState<number>(1)

  const handleDateRangeChange = (range: any | null) => {
    setDateRange(range) // Update date range
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const dropDownData = [
    { label: "Product Type", value: 1 }
  ]

  const handleRoleValueChange = (selectedOption: number): void => {
    setSelectValue(selectedOption) // Update dropdown selection
  }

  const onClear = () => {
    setDateRange(null) // Clear the date range
    setSelectValue(1) // Reset dropdown to the default value
  }

  const handleClick = () => {
    setModalOpen(true)
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="mt-4">
          <Breadcrumb pageName="Tickets" />
        </div>
        <div>
          <CreateTicketModal isOpen={modalOpen} onClose={handleModalClose} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <div className="ml-5 mt-4">
            {/* <DateRangeComponent
            onDateChange={handleDateRangeChange}
            size="lg"
            dateRange={dateRange} // Pass the dateRange from the state
          /> */}
            <DatePickerDemo />
          </div>
          <div className="ml-5 mt-4 w-50">
            <SelectDemo />
            {/* <Dropdown options={dropDownData} onChange={handleRoleValueChange} defaultValue={dropDownData[0]} /> */}
          </div>
          <div className="ml-2 mt-4">
            <Button onClick={onClear} size="default"
              disabled={loading}
              variant="outline">
              Clear
            </Button>
          </div>

          <div className="ml-2 mt-4">
            <Button onClick={onClear} size="default"
              disabled={loading}
              variant="outline">
              Apply Filters
            </Button>
            {/* <button
              className="relative ml-4 flex items-center justify-center rounded-xl border border-seaGreen bg-lightsecondary px-4 py-2 font-calibri font-normal text-seaGreen dark:bg-darkprimary"

            >

            </button> */}
          </div>
        </div>
        {/* tickets cards list */}
        <div className="my-4">
          <TicketsList />
        </div>
        <div>

        </div>
        <div className="flex h-full items-center justify-center py-20">
          {loading ? (
            <Loader />
          ) : (
            // <p>No tickets</p>
            null
          )}
        </div>
        {/* <CreateTicketModal isOpen={modalOpen} onClose={handleModalClose} /> */}
      </div></>
  )
}

export default TicketsPage
