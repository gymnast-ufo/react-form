import { SummaryStep } from '@/features'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const SummaryPage = () => {
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate('/step3')
  }

  const handleSubmit = () => {
    navigate('/')
  }

  return (
    <Container maxWidth="md">
      <SummaryStep onPrev={handlePrev} onSubmit={handleSubmit} />
    </Container>
  )
}
