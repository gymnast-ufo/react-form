import type { IRequestForm } from '@/entities'
import { FieldPhoneNumber, phoneNumberField, stringField } from '@/shared'
import { Grid } from '@mui/material'
import { Autocomplete, TextField } from 'mui-rff'

const phoneMask = '0___ ___ ___'

export const Step1 = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField label="Имя" name="firstName" fullWidth required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField label="Фамилия" name="lastName" fullWidth required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FieldPhoneNumber label="Телефон" name="phone" mask={phoneMask} required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Autocomplete
          label="Пол"
          name="gender"
          options={genderOptions}
          fullWidth
          required
          getOptionValue={(option) => option.value}
        />
      </Grid>
    </Grid>
  )
}

export type FormValues = Pick<IRequestForm, 'firstName' | 'lastName' | 'phone' | 'gender'>

export const getInitialValues = (props?: Partial<FormValues>): FormValues => {
  return {
    firstName: stringField.parse(props?.firstName),
    lastName: stringField.parse(props?.lastName),
    phone: phoneNumberField.parse(props?.phone) || '',
    gender: stringField.parse(props?.gender),
  }
}

const genderOptions = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' },
]
const genderValues = genderOptions.map((option) => option.value)

export const schemaStep1 = {
  firstName: stringField.schema().label('Имя').min(2).max(255).required(),
  lastName: stringField.schema().label('Фамилия').min(2).max(255).required(),
  gender: stringField
    .schema()
    .label('Пол')
    .valid(...genderValues)
    .required(),
  phone: phoneNumberField.schema(phoneMask).label('Телефон').required(),
}
