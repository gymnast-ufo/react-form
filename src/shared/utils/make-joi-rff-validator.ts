import reduce from 'lodash/reduce'
import update from 'lodash/update'
import Joi from 'joi'
import type { ValidationErrors } from 'final-form'
import castArray from 'lodash/castArray'

const joinMessages = (value: unknown): string | ValidationErrors => {
  if (Array.isArray(value)) {
    return value.length > 1 ? value.join('\n') : value[0]
  }
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return reduce(
      value as Record<string, unknown>,
      (acc, val, key) => {
        acc[key] = joinMessages(val)
        return acc
      },
      {} as ValidationErrors
    )
  }
  return value as string
}

export const makeJoiRffValidator =
  <T extends Record<string, unknown>>(schema: Joi.ObjectSchema<T>) =>
  (values: T): ValidationErrors | Promise<ValidationErrors> => {
    const { error } = schema.validate(values, {
      abortEarly: false,
      allowUnknown: true,
    })

    const collected = reduce(
      error?.details,
      (errors, err) => {
        update(errors, err.path, (curr = []) => [...curr, ...castArray(err.message)])
        return errors
      },
      {} as Record<string, unknown>
    )

    return joinMessages(collected) as ValidationErrors
  }
