import { Step3Form } from '@/features'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Step3Page = () => {
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate('/step2')
  }

  const handleSubmit = () => {
    navigate('/summary')
  }

  return (
    <Container maxWidth="md">
      <Step3Form onPrev={handlePrev} onSubmit={handleSubmit} />
    </Container>
  )
}
