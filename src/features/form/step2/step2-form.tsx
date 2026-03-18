import { Form, makeJoiRffValidator } from '@/shared'
import { Step2, type FormValues, getInitialValues, schemaStep2 } from './step2'
import Joi from 'joi'
import { useDispatch } from 'react-redux'
import { setValues } from './step2.store'

interface Step2FormProps {
  onPrev?: (values: FormValues) => void
  onSubmit?: (values: FormValues) => void
}

export const Step2Form = ({ onPrev, onSubmit }: Step2FormProps) => {
  const dispatch = useDispatch()

  const handlePrev = (values: FormValues) => {
    dispatch(setValues(values))
    onPrev?.(values)
  }

  const handleSubmit = (values: FormValues) => {
    dispatch(setValues(values))
    onSubmit?.(values)
  }

  const initialValues = getInitialValues()

  return (
    <Form
      initialValues={initialValues}
      validate={validator}
      onPrev={handlePrev}
      onSubmit={handleSubmit}
    >
      <Step2 />
    </Form>
  )
}

const validator = makeJoiRffValidator<FormValues>(Joi.object(schemaStep2))
