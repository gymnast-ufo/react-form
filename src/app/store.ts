import { step1Reducer, step2Reducer, step3Reducer } from '@/features'
import { baseApi } from '@/shared'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    step1: step1Reducer,
    step2: step2Reducer,
    step3: step3Reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
