import { Image } from 'entities/image/types'
import { Price } from 'entities/price/types'
import { ServiceType, serviceType } from 'entities/services/types'

export const projectTags = [
  ...serviceType,
  'digital clothes',
  'digital food',
  'presentation',
] as const

export type ProjectTags = typeof projectTags[number]

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
  tags: ProjectTags[]
}
