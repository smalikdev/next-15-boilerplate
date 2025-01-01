import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      {/* <SelectTrigger className="w-[180px]"> */}
        <SelectTrigger className="w-min-[180px]">
        <SelectValue placeholder="Product Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Product Type</SelectLabel>
          <SelectItem value="Ijara">Ijara</SelectItem>
          <SelectItem value="Tawarooq">Tawarooq</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
