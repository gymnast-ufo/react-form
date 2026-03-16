import { Form, makeJoiRffValidator } from '@/shared'
import { Step1, type FormValues, getInitialValues, schemaStep1 } from './step1'
import Joi from 'joi'

export const Step1Form = () => {
  const handleSubmit = (values: FormValues) => {}

  const handlePrev = () => {}

  const initialValues = getInitialValues()

  return (
    <Form
      title="Step 1"
      initialValues={initialValues}
      validate={validator}
      onSubmit={handleSubmit}
      strictSubmit
    >
      <Step1 />
    </Form>
  )
}

const validator = makeJoiRffValidator<FormValues>(Joi.object().keys(schemaStep1))
