const roles = [
  {
    id: 46,
    value: "Admin",
  },
  {
    id: 49,
    value: "Operation",
  },
  {
    id: 83,
    value: "Product Management",
  },
  {
    id: 87,
    value: "Executive Manager",
  },
  {
    id: 103,
    value: "Reports",
  },
  {
    id: 104,
    value: "Sales Agent",
  },
]

export function getRolesFromIds(ids: string) {
  const roleNames: string[] = []
  JSON.parse(ids).forEach((id: string) => {
    const role = roles.find((role) => role.id === parseInt(id))
    if (role) {
      roleNames.push(role.value)
    }
  })
  return roleNames.join(", ")
}
