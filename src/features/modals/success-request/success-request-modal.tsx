import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'
import type { IRequestForm } from '@/entities'

interface SuccessRequestModalProps {
  open: boolean
  request: IRequestForm | null
  onClose: () => void
}

export const SuccessRequestModal = (props: SuccessRequestModalProps) => {
  const { open, request, onClose } = props

  if (!request) return null

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Поздравляем, {request.firstName} {request.lastName}!
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Вам одобрено ${request.amount} на {request.term} дней.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  )
}
