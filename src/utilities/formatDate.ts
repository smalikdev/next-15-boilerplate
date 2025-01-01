// Helper function to format the date as YYYY-MM-DD without converting to UTC
export const formatDate = (date: Date | string): string => {
  if (!date) return ""
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = `0${newDate.getMonth() + 1}`.slice(-2)
  const day = `0${newDate.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}

// Helper function to format the date as DD-MM-YYYY without converting to UTC
export const formatDateDDMMYYYY = (date: Date | string): string => {
  if (!date) return ""
  const newDate = new Date(date)
  const day = `0${newDate.getDate()}`.slice(-2)
  const month = `0${newDate.getMonth() + 1}`.slice(-2)
  const year = newDate.getFullYear()
  return `${day}/${month}/${year}`
}

export const formatDateDDMMYYYYHHMM = (date: Date | string): string => {
  if (!date) return ""
  const newDate = new Date(date)

  const day = `0${newDate.getDate()}`.slice(-2)
  const month = `0${newDate.getMonth() + 1}`.slice(-2)
  const year = newDate.getFullYear()

  const hours = `0${newDate.getHours()}`.slice(-2)
  const minutes = `0${newDate.getMinutes()}`.slice(-2)

  return `${day}/${month}/${year} ${hours}:${minutes}`
}
