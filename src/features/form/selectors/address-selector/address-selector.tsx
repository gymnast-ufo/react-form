import { useGetJobAddressesQuery, type IJobAddress } from '@/entities'
import { Autocomplete, type AutocompleteProps } from 'mui-rff'
import { useMemo } from 'react'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const AddressSelector = (
  props: Omit<AutocompleteProps<IJobAddress, false, false, false>, 'options'>
) => {
  const { data, isLoading, error } = useGetJobAddressesQuery(undefined, { skip: !!props.disabled })

  const helperText = useMemo(() => {
    if (error instanceof Error) return error.message
    return (error as FetchBaseQueryError)?.data as string
  }, [error])

  const options = useMemo(() => {
    return data ?? []
  }, [data])

  return <Autocomplete loading={isLoading} options={options} helperText={helperText} {...props} />
}
