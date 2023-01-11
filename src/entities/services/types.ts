import { Price } from 'entities/price/types'

export type ServiceType = 'mobile' | 'web' | 'CGI' | 'AR' | 'VR' | 'UXUI'

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
