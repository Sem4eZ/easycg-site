export type ServiceType = 'mobile' | 'web' | 'CGI' | 'AR' | 'VR' | 'UX/UI'

export interface Service {
  type: string
  name: string
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
