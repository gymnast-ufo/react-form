import { InputMask, type InputMaskProps } from '@react-input/mask'
import { TextField, type TextFieldProps } from 'mui-rff'

export const FieldPhoneNumber = (props: InputMaskProps & TextFieldProps) => {
  const { name = 'phoneNumber', label = 'Phone number', mask, ...fieldProps } = props

  return (
    <TextField
      {...fieldProps}
      name={name}
      label={label}
      fullWidth
      slots={{ input: (props) => <InputMask {...props} mask={mask} /> }}
    />
  )
}
