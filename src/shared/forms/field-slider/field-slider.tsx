import {
  Box,
  Grid,
  Input,
  Slider,
  Typography,
  styled,
  type SliderProps,
  type InputProps,
} from '@mui/material'
import { useField } from 'react-final-form'

interface IFieldSliderProps {
  name: string
  label: string
  min?: number
  max?: number
  step?: number
  marks?: boolean
  withInput?: boolean
  inputProps?: InputProps
  sliderProps?: SliderProps
}

export const FieldSlider = (props: IFieldSliderProps) => {
  const {
    name,
    label,
    min = 0,
    max = 100,
    step = 1,
    marks,
    withInput = true,
    inputProps,
    sliderProps,
  } = props

  const { input } = useField(name)

  const handleSliderChange = (_: Event, value: number | number[]) => {
    input.onChange(value)
  }

  const handleInputChange: InputProps['onChange'] = (event) => {
    input.onChange(Number(event.target.value))
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>

      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid size="grow">
          <Slider
            min={min}
            max={max}
            step={step}
            marks={marks}
            value={input.value}
            onChange={handleSliderChange}
            aria-labelledby={`${name}-slider`}
            {...sliderProps}
          />
        </Grid>

        {withInput && (
          <Grid>
            <StyledInput
              value={input.value}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              inputProps={{
                min: min,
                max: max,
                step: step,
                type: 'number',
                'aria-labelledby': `${name}-slider`,
              }}
              {...inputProps}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

const StyledInput = styled(Input)({
  width: 80,
})
