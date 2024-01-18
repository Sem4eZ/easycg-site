import { Price } from 'entities/price/types'

export const serviceType = [
  // 'mobile',
  // 'web',
  'CGI',
  'AR',
  'VR',
  // 'UXUI',
  'XR',
  'APP',
] as const

export type ServiceType = typeof serviceType[number]

export interface Service {
  type: ServiceType
  name: string
  shortName: string
  nameExplanation?: string
  description: string
  services: string[]
  details: Price
  remark: string
  icon: React.ReactNode
}
