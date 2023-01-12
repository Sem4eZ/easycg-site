import { Price } from 'entities/price/types'
import { ServiceType } from 'entities/services/types'

export interface Project {
  id: string
  name: string
  description: string
  image: string
  date: Date
  servicesType: ServiceType[]
  type: string
  about: string
  details: Price
  detailsRemark: string
  picturesRemark: string[]
  detailPreviewImage: string
  link: {
    type: 'app' | 'site' | 'video'
    url: string
  }
  carousel: string[]
}
