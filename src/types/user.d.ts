export type User = {
  id: number
  firstName?: string

  lastName?: string

  avatar?: string

  phone: string

  userType: number

  email: string

  status: string

  role: {
    Permission: {
      roleId: number
      appModuleId: number
      module: {
        name: string
        path: string
      }
    }[]
  }
}
