import type { IRequest, IRequestForm } from '../types'

type PrepareRequestResult = Omit<IRequest, 'id'> & {
  title: string
}
export const prepareRequest = (request: IRequestForm): PrepareRequestResult => {
  const { firstName, lastName, jobAddress, ...rest } = request

  return {
    title: `${firstName} ${lastName}`,
    ...rest,
    first_name: firstName,
    last_name: lastName,
    job_address: jobAddress,
  }
}

export const parseRequest = (request: Omit<IRequest, 'id'>): IRequestForm => {
  const { first_name, last_name, job_address, ...rest } = request

  return {
    ...rest,
    firstName: first_name,
    lastName: last_name,
    jobAddress: job_address,
  }
}
