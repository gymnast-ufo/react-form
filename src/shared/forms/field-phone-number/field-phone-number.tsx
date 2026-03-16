import MaterialPhoneNumber, { type MuiPhoneNumberProps } from 'material-ui-phone-number-2'
import { showErrorOnChange } from 'mui-rff'
import { useRef } from 'react'
import { useField } from 'react-final-form'

interface IFieldPhoneNumberProps {
  basePhoneNumber?: string
  defaultCountry?: string
  required?: boolean
  name?: string
  label?: string
}

export const FieldPhoneNumber = (
  props: IFieldPhoneNumberProps & Partial<Omit<MuiPhoneNumberProps, keyof IFieldPhoneNumberProps>>
) => {
  const {
    helperText,
    name = 'phoneNumber',
    label = 'Phone number',
    size,
    basePhoneNumber,
    ...fieldProps
  } = props
  const phoneNumberRef = useRef<HTMLInputElement>(null)

  const {
    input: { value, onChange, onBlur, onFocus, ...restInput },
    meta,
  } = useField(name)

  const { error, submitError } = meta
  const isError = showErrorOnChange({ meta })

  return (
    <MaterialPhoneNumber
      {...fieldProps}
      name={name}
      label={label}
      ref={phoneNumberRef}
      fullWidth
      helperText={isError ? error || submitError : helperText}
      error={isError}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
      variant="outlined"
      slotProps={{
        ...fieldProps.slotProps,
        input: {
          size: 'small',
          ...fieldProps.slotProps?.input,
          required: fieldProps.required,
          ...restInput,
        },
      }}
    />
  )
}
