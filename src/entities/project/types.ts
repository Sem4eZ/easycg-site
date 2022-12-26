import { ServiceType } from 'entities/services/types'

export interface Project {
  id: string
  name: string
  description: string
  image: string
  date: Date
  servicesType: ServiceType[]
  type: string
}
