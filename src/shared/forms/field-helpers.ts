import { clearPhoneNumber, formatPhoneNumber } from '../utils'
import { parsePhoneNumberWithError } from 'libphonenumber-js'
import Joi from 'joi'

const defaultStringNormalizer = (value?: string | null, spaceAllowed = true) =>
  (value || '').replace(/(\s)+/g, spaceAllowed ? '$1' : '').trim()

export const stringField = {
  schema: (spaceAllowed = true) =>
    Joi.string()
      .trim()
      .replace(/(\s)+/g, spaceAllowed ? '$1' : ''),
  parse: defaultStringNormalizer,
  prepare: defaultStringNormalizer,
}

export const phoneNumberField = {
  schema: () =>
    Joi.string()
      .custom((value) => {
        const clean = clearPhoneNumber(value)
        try {
          const phoneNumber = parsePhoneNumberWithError(clean)
          if (!phoneNumber?.isValid()) {
            throw new Error()
          }
          return
        } catch (e) {
          throw new Error('did not seem to be a phone number')
        }
      })
      .messages({ 'any.custom': '{{#label}} {{#error.message}}' }),

  parse: formatPhoneNumber,
  prepare: clearPhoneNumber,
}
