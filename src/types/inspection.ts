export type Inspection = {
  id: string
  buyingPrice: null
  inspectionStatus: string
  car: string
  sellingPrice: string
  organization: string
  createdAt: string
  Car: {
    sellingPrice: string
    VIN: string
    Organization?: {
      organizationName: string
    }
  }
}
