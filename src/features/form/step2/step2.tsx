import { stringField } from '@/shared'
import { Grid } from '@mui/material'
import { TextField } from 'mui-rff'
import { AddressSelector } from '../selectors'
import type { IJobAddress, IRequestForm } from '@/entities'

export const Step2 = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <AddressSelector label="Место работы" name="jobAddress" fullWidth required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField label="Адрес проживания" name="address" fullWidth required />
      </Grid>
    </Grid>
  )
}

export type FormValues = Pick<IRequestForm, 'jobAddress' | 'address'>

export const getInitialValues = (props?: Partial<FormValues>): FormValues => {
  return {
    jobAddress: stringField.parse(props?.jobAddress) as IJobAddress,
    address: stringField.parse(props?.address),
  }
}
export const schemaStep2 = {
  jobAddress: stringField.schema().label('Место работы').required(),
  address: stringField.schema().label('Адрес проживания').min(3).max(255).required(),
}
