import { Image } from 'entities/image/types'
import { Price } from 'entities/price/types'
import { ServiceType, serviceType } from 'entities/services/types'

export const projectTags = [...serviceType, 'clothes', 'food'] as const

export type ProjectTags = typeof projectTags[number]

export interface Project {
  id: string
  name: string
  titleDescription: string
  description: string
  image: Image
  date: Date
  servicesType: ServiceType[]
  type: string
  titleAbout: string
  about: string
  details: Price
  detailsRemark: string
  picturesRemark: string[]
  detailPreview: string
  tags: ProjectTags[]
}
