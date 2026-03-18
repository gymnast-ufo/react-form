import type { FormState, ValidationErrors } from 'final-form'
import { castArray, isObject } from 'lodash'

export function checkIsSubmitDisabled<T>(props: Partial<FormState<T>>): string | false {
  const {
    dirty,
    submitting,
    submitSucceeded,
    hasSubmitErrors,
    hasValidationErrors,
    modifiedSinceLastSubmit,
    errors,
  } = props
  let submitDisabled: string | false = false

  if (!dirty) {
    submitDisabled = submitSucceeded ? 'All data saved' : 'Form has no changes'
  }

  if (hasValidationErrors || (hasSubmitErrors && !modifiedSinceLastSubmit)) {
    submitDisabled = flatErrors(errors)
  }

  if (submitting) {
    submitDisabled = 'Form is submitting...'
  }

  return submitDisabled
}

const flatErrors = (errors: ValidationErrors): string => {
  const errorMessage = 'The form contains errors or missing required fields'
  if (!errors) return errorMessage

  try {
    return Object.entries(errors)
      .map(([_, message]) =>
        isObject(message) ? flatErrors(message) : `${castArray(message).join(', ')}`
      )
      .join('\n')
  } catch (error) {
    return errorMessage
  }
}
