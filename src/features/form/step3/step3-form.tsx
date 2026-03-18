import { Form, makeJoiRffValidator } from '@/shared'
import { Step3, type FormValues, getInitialValues, schemaStep3 } from './step3'
import Joi from 'joi'
import { useDispatch } from 'react-redux'
import { setValues } from './step3.store'

interface Step3FormProps {
  onPrev?: (values: FormValues) => void
  onSubmit?: (values: FormValues) => void
}

export const Step3Form = ({ onPrev, onSubmit }: Step3FormProps) => {
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
      <Step3 />
    </Form>
  )
}

const validator = makeJoiRffValidator<FormValues>(Joi.object(schemaStep3))
