export type OrganizationCreateDto = {
  organizationName?: string

  legalName?: string

  logo?: string

  contactEmail?: string

  contactPhone?: string

  postalCode?: string

  addressLine1?: string

  addressLine2?: string

  website?: string

  city?: string

  country?: string

  status?: string
}

export type OrganizationUpdateDto = {
  id: number
  organizationName?: string

  legalName?: string

  logo?: string

  contactEmail?: string

  contactPhone?: string

  postalCode?: string

  addressLine1?: string

  addressLine2?: string

  website?: string

  city?: string

  country?: string

  status?: string
}
