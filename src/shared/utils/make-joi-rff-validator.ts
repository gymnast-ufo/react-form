import reduce from 'lodash/reduce'
import update from 'lodash/update'
import Joi from 'joi'
import type { ValidationErrors } from 'final-form'
import castArray from 'lodash/castArray'

export const makeJoiRffValidator =
  <T extends Record<string, unknown>>(schema: Joi.ObjectSchema<T>) =>
  (values: T): ValidationErrors | Promise<ValidationErrors> => {
    const { error } = schema.validate(values, {
      abortEarly: false,
      allowUnknown: true,
    })

    return reduce(
      error?.details,
      (errors, error) => {
        update(errors, error.path, (curr = []) => [...curr, ...castArray(error.message)])
        return errors
      },
      {}
    )
  }
