import { baseApi } from '@/shared'
import type { IRequest, IRequestForm } from '../types'
import { prepareRequest } from '../utils/request-transformer'

const requestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRequest: builder.mutation<IRequest, IRequestForm>({
      query: (request) => ({
        url: '/products/add',
        method: 'POST',
        body: prepareRequest(request),
      }),
    }),
  }),
})

export const { useCreateRequestMutation } = requestApi
