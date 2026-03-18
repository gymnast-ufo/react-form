import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormValues } from './step3'

export const step3Slice = createSlice({
  name: 'step3',
  initialState: {
    amount: 0,
    term: 0,
  } as FormValues,
  reducers: {
    setValues: (state, action: PayloadAction<FormValues>) => {
      state.amount = action.payload.amount
      state.term = action.payload.term
    },
  },
})

export const { setValues } = step3Slice.actions
export const step3Reducer = step3Slice.reducer
