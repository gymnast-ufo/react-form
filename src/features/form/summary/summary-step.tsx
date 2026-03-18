import type { RootState } from '@/app/store'
import type { IRequestForm } from '@/entities'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

interface SummaryStepProps {
  isLoading?: boolean
  onPrev?: () => void
  onSubmit: (values: IRequestForm) => void
}

export const SummaryStep = (props: SummaryStepProps) => {
  const { isLoading, onPrev, onSubmit } = props

  const { step1, step2, step3 } = useSelector((state: RootState) => state)

  const handleSubmit = () => {
    onSubmit?.({ ...step1, ...step2, ...step3 })
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Property label="Имя" value={step1.firstName} />
        <Property label="Телефон" value={step1.phone} />
        <Property label="Фамилия" value={step1.lastName} />
        <Property label="Пол" value={step1.gender} />

        <Property label="Место работы" value={step2.jobAddress} />
        <Property label="Адрес проживания" value={step2.address} />

        <Property label="Сумма" value={`$${step3.amount}`} />
        <Property label="Срок" value={`${step3.term} дней`} />
      </Grid>

      <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: 'center' }}>
        <Button variant="outlined" onClick={onPrev} disabled={!onPrev}>
          Назад
        </Button>

        <Button variant="contained" color="primary" loading={isLoading} onClick={handleSubmit}>
          Подать заявку
        </Button>
      </Stack>
    </Box>
  )
}

const Property = ({ label, value }: { label: string; value: string }) => {
  return (
    <Grid container size={{ xs: 12, md: 6 }} spacing={2} sx={{ alignItems: 'center' }}>
      <Grid>
        <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: 130 }}>
          {label}
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="body1" fontWeight="bold">
          {value}
        </Typography>
      </Grid>
    </Grid>
  )
}
