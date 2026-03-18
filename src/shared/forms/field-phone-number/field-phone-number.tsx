import { clearPhoneNumber, formatPhoneNumber } from '@/shared/utils'
import { useMask, type InputMaskProps, generatePattern } from '@react-input/mask'
import Joi from 'joi'
import { TextField, type TextFieldProps } from 'mui-rff'
import { localizedMessages } from '../field-helpers'

const replacement = { _: /\d/ }

export const FieldPhoneNumber = (props: InputMaskProps & TextFieldProps) => {
  const { name = 'phone', label = 'Телефон', mask, ...fieldProps } = props

  const inputRef = useMask({
    mask,
    replacement,
  })

  return (
    <TextField
      {...fieldProps}
      name={name}
      label={label}
      fullWidth
      slotProps={{
        input: {
          inputRef: inputRef,
        },
      }}
    />
  )
}

export const phoneNumberField = {
  schema: (mask: string) =>
    Joi.string()
      .custom((value) => {
        try {
          const pattern = generatePattern('full', { mask, replacement })
          if (!new RegExp(pattern).test(value)) {
            throw new Error()
          }
          return
        } catch (e) {
          const maskLabel = mask.replace(/_/g, 'X')
          throw new Error(`имеет неверный формат (${maskLabel})`)
        }
      })
      .messages(localizedMessages),

  parse: formatPhoneNumber,
  prepare: clearPhoneNumber,
}
