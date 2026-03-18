import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getInitialValues, type FormValues } from './step1'

export const step1Slice = createSlice({
  name: 'step1',
  initialState: getInitialValues(),
  reducers: {
    setValues: (state, action: PayloadAction<FormValues>) => {
      state.phone = action.payload.phone
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.gender = action.payload.gender
    },
  },
})

export const { setValues } = step1Slice.actions
export const step1Reducer = step1Slice.reducer
