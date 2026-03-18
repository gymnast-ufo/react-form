import type { IRequestForm } from '@/entities'
import { FieldSlider, numberField } from '@/shared'
import { Grid, InputAdornment } from '@mui/material'

export const Step3 = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 6 }}>
        <FieldSlider
          name="amount"
          label="Сумма"
          min={200}
          max={1000}
          step={100}
          marks
          withInput
          inputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FieldSlider name="term" label="Срок (дней)" min={10} max={30} step={1} withInput />
      </Grid>
    </Grid>
  )
}

export type FormValues = Pick<IRequestForm, 'amount' | 'term'>

export const getInitialValues = (props?: Partial<FormValues>): FormValues => {
  return {
    amount: numberField.parse(props?.amount) || 500,
    term: numberField.parse(props?.term) || 14,
  }
}

export const schemaStep3 = {
  amount: numberField.schema().label('Сумма').required(),
  term: numberField.schema().label('Срок').required(),
}
