import type { RootState } from '@/app/store'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

interface SummaryStepProps {
  onPrev?: () => void
  onSubmit: () => void
}

export const SummaryStep = (props: SummaryStepProps) => {
  const { onPrev, onSubmit } = props

  const { step1, step2, step3 } = useSelector((state: RootState) => state)

  return (
    <Box>
      <Grid container spacing={2}>
        <Property label="Name" value={step1.name} />
        <Property label="Phone" value={step1.phone} />
        <Property label="Last Name" value={step1.lastName} />
        <Property label="Gender" value={step1.gender} />

        <Property label="Job Address" value={step2.jobAddress} />
        <Property label="Address" value={step2.address} />

        <Property label="Amount" value={step3.amount.toString()} />
        <Property label="Term" value={step3.term.toString()} />
      </Grid>

      <Stack direction="row" spacing={1}>
        <Button variant="outlined" onClick={onPrev} disabled={!onPrev}>
          Previous
        </Button>

        <Button variant="contained" color="primary" onClick={onSubmit}>
          Create
        </Button>
      </Stack>
    </Box>
  )
}

const Property = ({ label, value }: { label: string; value: string }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 4 }}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </Grid>

      <Grid size={{ xs: 6, md: 4 }}>{value}</Grid>
    </Grid>
  )
}
