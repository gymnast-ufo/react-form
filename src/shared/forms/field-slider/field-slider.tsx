import { NumberField, type NumberFieldInputProps } from '@base-ui/react/number-field'
import { Box, Slider, Typography } from '@mui/material'
import { useField } from 'react-final-form'

interface IFieldSliderProps {
  name: string
  label: string
  min?: number
  max?: number
  step?: number
  marks?: boolean
  withInput?: boolean
}

export const FieldSlider = (props: IFieldSliderProps) => {
  const { name, label, min = 0, max = 100, step = 1, marks, withInput = true } = props

  const { input } = useField(name)

  const handleSliderChange = (_: Event, value: number | number[]) => {
    input.onChange(value)
  }

  const handleInputChange: NumberFieldInputProps['onChange'] = (event) => {
    input.onChange(Number(event.target.value))
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>

      <Slider min={min} max={max} step={step} marks={marks} onChange={handleSliderChange} />

      {withInput && (
        <NumberField.Root min={min} max={max} step={step}>
          <NumberField.Input onChange={handleInputChange} onBlur={handleInputChange} />
        </NumberField.Root>
      )}
    </Box>
  )
}
