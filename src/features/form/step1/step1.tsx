import { FieldPhoneNumber, phoneNumberField, stringField } from '@/shared'
import { Grid, MenuItem, Select } from '@mui/material'
import Joi from 'joi'
import { TextField } from 'mui-rff'

export const Step1 = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <FieldPhoneNumber label="Phone" name="phone" required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField label="Name" name="name" fullWidth required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField label="Last Name" name="lastName" fullWidth required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Select label="Gender" name="gender" fullWidth required>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export type FormValues = {
  phone: string
  name: string
  lastName: string
  gender: string
}

export const getInitialValues = (props: Partial<FormValues> = {}): FormValues => {
  return {
    phone: '',
    name: '',
    lastName: '',
    gender: '',
    ...props,
  }
}

export const schemaStep1 = {
  name: stringField.schema(false).required(),
  lastName: stringField.schema(false).required(),
  gender: stringField.schema(false).required(),
  phone: phoneNumberField.schema().required(),
}
