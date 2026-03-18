import { Form, makeJoiRffValidator } from '@/shared'
import { Step1, type FormValues, getInitialValues, schemaStep1 } from './step1'
import Joi from 'joi'
import { useDispatch } from 'react-redux'
import { setValues } from './step1.store'

interface Step1FormProps {
  onSubmit?: (values: FormValues) => void
}

export const Step1Form = ({ onSubmit }: Step1FormProps) => {
  const dispatch = useDispatch()

  const handleSubmit = (values: FormValues) => {
    dispatch(setValues(values))
    onSubmit?.(values)
  }

  const initialValues = getInitialValues()

  return (
    <Form initialValues={initialValues} validate={validator} isFirstStep onSubmit={handleSubmit}>
      <Step1 />
    </Form>
  )
}

const validator = makeJoiRffValidator<FormValues>(Joi.object(schemaStep1))
