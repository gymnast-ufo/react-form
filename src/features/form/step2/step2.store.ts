import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getInitialValues, type FormValues } from './step2'

export const step2Slice = createSlice({
  name: 'step2',
  initialState: getInitialValues(),
  reducers: {
    setValues: (state, action: PayloadAction<FormValues>) => {
      state.jobAddress = action.payload.jobAddress
      state.address = action.payload.address
    },
  },
})

export const { setValues } = step2Slice.actions
export const step2Reducer = step2Slice.reducer
