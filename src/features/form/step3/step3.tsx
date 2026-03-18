import { FieldSlider, numberField } from '@/shared'
import { Grid } from '@mui/material'

export const Step3 = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <FieldSlider name="amount" label="Amount" min={200} max={1000} step={100} marks withInput />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FieldSlider name="term" label="Term" min={10} max={30} step={1} withInput />
      </Grid>
    </Grid>
  )
}

export type FormValues = {
  amount: number
  term: number
}

export const getInitialValues = (props?: Partial<FormValues>): FormValues => {
  return {
    amount: 500,
    term: 14,
    ...props,
  } as FormValues
}

export const schemaStep3 = {
  amount: numberField.schema().required(),
  term: numberField.schema().required(),
}
