export type ServiceType = 'mobile' | 'web' | 'CGI' | 'AR' | 'VR' | 'UXUI'

export interface Service {
  type: ServiceType
  name: string
  shortName: string
  nameExplanation?: string
  description: string
  services: string[]
  details: {
    price: string
    developmentTime: string
    rate: string
    exactPrice: string
    additionalExpenses: string
  }
  remark: string
  icon: React.ReactNode
}
