import { Image } from 'entities/image/types'

export interface Teammate {
  id: string
  name: string
  description: string
  image: {
    main: Image
    hidden: Image
  }
  date: Date
  position: string
}
