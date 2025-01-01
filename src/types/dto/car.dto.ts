export type CarCreateDto = {
  inspectionId?: number
  organizationId?: number
  make?: string

  modelYear?: number

  engine?: string

  gearType?: string

  color?: string

  model?: string

  VIN?: string

  mileage?: number

  bodyType?: string

  engineType?: string

  sellingPrice?: string

  carStatus?: string

  estimatedRetailPrice?: string

  exactModel?: string
}

export type CarUpdateDto = {
  id: string

  inspectionId?: number
  organizationId?: number
  make?: string

  modelYear?: number

  engine?: string

  gearType?: string

  color?: string

  model?: string

  VIN?: string

  mileage?: number

  bodyType?: string

  engineType?: string

  sellingPrice?: string

  carStatus?: string

  estimatedRetailPrice?: string

  exactModel?: string
}
