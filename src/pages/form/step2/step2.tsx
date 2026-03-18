import { Step2Form } from '@/features'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Step2Page = () => {
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate('/step1')
  }

  const handleSubmit = () => {
    navigate('/step3')
  }

  return (
    <Container maxWidth="md">
      <Step2Form onPrev={handlePrev} onSubmit={handleSubmit} />
    </Container>
  )
}
