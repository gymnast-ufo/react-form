import { Step2Form } from '@/features'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Step2Page = () => {
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate('/')
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

export default Step2Page
