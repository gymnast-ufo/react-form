import { Form as FinalForm, useForm, type FormProps, useFormState } from 'react-final-form'
import { Button, DialogContentText, Stack } from '@mui/material'
import type { SyntheticEvent } from 'react'
import { Loader } from '../../ui'
import { checkIsSubmitDisabled } from './helpers'

interface IFormProps extends FormProps {
  loading?: boolean
  isFirstStep: boolean
  isLastStep: boolean
  onPrev: (event: SyntheticEvent) => void
  onNext: (event: SyntheticEvent) => void
}

export const Form = (props: IFormProps) => {
  const { children, loading, isFirstStep, isLastStep, onPrev, onNext, ...formProps } = props

  if (loading) return <Loader />

  return (
    <FinalForm
      {...formProps}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.handleSubmit} noValidate>
          {typeof children === 'function' ? children(formRenderProps) : children}
          {!formRenderProps.modifiedSinceLastSubmit && formRenderProps.submitError && (
            <DialogContentText color="error" sx={{ textAlign: 'center', mt: 2 }}>
              {formRenderProps.submitError}
            </DialogContentText>
          )}

          <FormActions
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onNext={onNext}
            onPrev={onPrev}
          />
        </form>
      )}
    />
  )
}

const FormActions = (
  props: Pick<IFormProps, 'isFirstStep' | 'isLastStep' | 'onNext' | 'onPrev'>
) => {
  const { isFirstStep, isLastStep, onNext, onPrev } = props
  const form = useForm()
  const formState = useFormState()
  const submitDisabled = checkIsSubmitDisabled(formState)

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()
    isLastStep ? form.submit() : onNext?.(event)
  }

  const handlePrev = (event: SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()
    onPrev?.(event)
  }

  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" disabled={isFirstStep} onClick={handlePrev}>
        Previous
      </Button>

      <Button color="primary" variant="contained" disabled={!!submitDisabled} onClick={handleNext}>
        {isLastStep ? 'Create' : 'Next'}
      </Button>
    </Stack>
  )
}
