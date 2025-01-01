import NextAuth from "next-auth/next"

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string
      lastName: string
      displayName: string
      description: string
      email: string
      // role: string
      roleIds: string
      avatar: string | null
      phone: number
      access_token: string
      refresh_token: string
      role: {
        name: string
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
  }
  interface User {
    token: string // Add the token property here
    role: string
    displayName: string
    description: string
    roleIds: string
  }
}
