import { Form as FinalForm, useForm, type FormProps, useFormState } from 'react-final-form'
import { Button, DialogContentText, Stack } from '@mui/material'
import type { SyntheticEvent } from 'react'
import { Loader } from '../../ui'

interface IFormProps<T> extends FormProps<T> {
  loading?: boolean
  isFirstStep?: boolean
  isLastStep?: boolean
  onPrev?: (values: T) => void
}

export function Form<T extends object>(
  props: IFormProps<T> & { initialValues: T | Partial<T> }
): ReturnType<typeof FinalForm>
export function Form<T extends object>(props: IFormProps<T>) {
  const { children, loading, isFirstStep, isLastStep, onPrev, ...formProps } = props

  if (loading) return <Loader />

  return (
    <FinalForm
      {...formProps}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.handleSubmit} noValidate autoComplete="off">
          {typeof children === 'function' ? children(formRenderProps) : children}
          {!formRenderProps.modifiedSinceLastSubmit && formRenderProps.submitError && (
            <DialogContentText color="error" sx={{ textAlign: 'center', mt: 2 }}>
              {formRenderProps.submitError}
            </DialogContentText>
          )}

          <FormActions<T> isFirstStep={isFirstStep} isLastStep={isLastStep} onPrev={onPrev} />
        </form>
      )}
    />
  )
}

const FormActions = <T,>(props: Pick<IFormProps<T>, 'isFirstStep' | 'isLastStep' | 'onPrev'>) => {
  const { isFirstStep, isLastStep, onPrev } = props
  const form = useForm<T>()
  const formState = useFormState<T>()

  const handlePrev = (event: SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()
    onPrev?.(formState.values as T)
  }

  return (
    <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: 'center' }}>
      <Button variant="outlined" disabled={isFirstStep} onClick={handlePrev}>
        Назад
      </Button>

      <Button color="primary" variant="contained" onClick={form.submit}>
        {isLastStep ? 'Создать' : 'Далее'}
      </Button>
    </Stack>
  )
}
