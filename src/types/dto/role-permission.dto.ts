import { PermissionDto } from "./permission.dto"

export type RolePermissionDto = {
  id: number

  name: string

  description: string

  Permission: PermissionDto[]
}
