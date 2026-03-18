import type { IJobAddress } from '../job-address'

export interface IRequest {
  id: string
  first_name: string
  last_name: string
  phone: string
  gender: string
  job_address: IJobAddress
  address: string
  amount: number
  term: number
}

export interface IRequestForm extends Omit<
  IRequest,
  'id' | 'first_name' | 'last_name' | 'job_address'
> {
  firstName: string
  lastName: string
  jobAddress: IJobAddress
}
