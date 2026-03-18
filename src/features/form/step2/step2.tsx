import { stringField } from '@/shared'
import { Grid } from '@mui/material'
import { TextField } from 'mui-rff'
import { AddressSelector } from '../selectors'
import type { IJobAddress } from '@/entities'

export const Step2 = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <AddressSelector label="Job address" name="jobAddress" fullWidth required />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField label="Living address" name="address" fullWidth required />
      </Grid>
    </Grid>
  )
}

export type FormValues = {
  jobAddress: IJobAddress
  address: string
}

export const getInitialValues = (props?: Partial<FormValues>): FormValues => {
  return {
    jobAddress: '',
    address: '',
    ...props,
  } as FormValues
}

export const schemaStep2 = {
  jobAddress: stringField.schema().required(),
  address: stringField.schema().required(),
}
