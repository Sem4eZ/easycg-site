import { Image } from 'entities/image/types'
import { Price } from 'entities/price/types'
import { ServiceType } from 'entities/services/types'

export interface Project {
  id: string
  name: string
  description: string
  image: Image
  date: Date
  servicesType: ServiceType[]
  type: string
  about: string
  details: Price
  detailsRemark: string
  picturesRemark: string[]
  detailPreview:
    | {
        type: 'image'
        image: Image
      }
    | { type: 'video'; url: string }
  link: {
    type: 'app' | 'site' | 'video'
    url: string
  }
  carousel: Image[]
}
