import { baseApi } from '@/shared'
import type { IJobAddress } from './job-address.types'

export const jobAddressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobAddresses: builder.query<IJobAddress[], void>({
      query: () => '/products/category-list',
    }),
  }),
})

export const { useGetJobAddressesQuery } = jobAddressApi
