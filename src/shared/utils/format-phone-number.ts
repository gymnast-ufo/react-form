import { parsePhoneNumberWithError } from 'libphonenumber-js'

export const clearPhoneNumber = (number?: string | number | null) => {
  if (!number) return ''
  const onlyDigits = number.toString().replace(/\D/g, '')
  if (isNaN(+onlyDigits) || onlyDigits.length === 0) return ''
  return `+${onlyDigits}`
}

export const formatPhoneNumber = (number?: string | number | null): string | null => {
  let result = number
  if (!number) return null
  try {
    result = parsePhoneNumberWithError(clearPhoneNumber(number)).formatInternational()
  } finally {
    return `${result}`
  }
}
