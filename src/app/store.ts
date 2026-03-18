import { step1Reducer, step2Reducer, step3Reducer } from '@/features'
import { baseApi } from '@/shared'
import { combineReducers, configureStore, createAction } from '@reduxjs/toolkit'

export const clearStore = createAction('clearStore')

const appReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  step1: step1Reducer,
  step2: step2Reducer,
  step3: step3Reducer,
})

const rootReducer: typeof appReducer = (state, action) => {
  if (clearStore.match(action)) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
