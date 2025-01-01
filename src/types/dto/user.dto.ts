export type UserCreateDto = {
  firstName?: string

  lastName?: string

  avatar?: string

  phone: string

  userType: number

  email: string

  password: string

  status: string
}

export type UserUpdateDto = {
  id: number
  firstName?: string

  lastName?: string

  avatar?: string

  phone: string

  userType: number

  email: string

  password: string

  status: string
}
