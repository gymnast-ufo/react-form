import { Step1Form } from '@/features'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Step1Page = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/step2')
  }

  return (
    <Container maxWidth="md">
      <Step1Form onSubmit={handleSubmit} />
    </Container>
  )
}
