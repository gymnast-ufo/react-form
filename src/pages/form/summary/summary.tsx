import { clearStore } from '@/app/store'
import { useCreateRequestMutation, type IRequestForm, type IRequest } from '@/entities'
import { SuccessRequestModal, SummaryStep } from '@/features'
import { Container } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SummaryPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [createRequest, { isLoading }] = useCreateRequestMutation()
  const [open, setOpen] = useState(false)
  const [request, setRequest] = useState<IRequestForm | null>(null)

  const handlePrev = () => {
    navigate('/step3')
  }

  const handleSubmit = async (values: IRequestForm) => {
    const result = await createRequest(values)

    if (result.error) {
      console.error('error', result.error)
      return
    }

    setOpen(true)
    setRequest(values)
  }

  const handleClose = () => {
    setOpen(false)
    setRequest(null)
    dispatch(clearStore())
    navigate('/')
  }

  return (
    <>
      <Container maxWidth="md">
        <SummaryStep isLoading={isLoading} onPrev={handlePrev} onSubmit={handleSubmit} />
      </Container>

      <SuccessRequestModal open={open} request={request} onClose={handleClose} />
    </>
  )
}

export default SummaryPage
