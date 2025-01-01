import { AppModuleDto } from "./module.dto"

export type PermissionDto = {
  create: boolean

  read: boolean

  update: boolean

  delete: boolean

  appModuleId: number

  appModule: AppModuleDto
}
