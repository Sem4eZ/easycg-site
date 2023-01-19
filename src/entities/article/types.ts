import React from 'react'

import { Image } from 'entities/image/types'

export interface Article {
  id: string
  name: string
  description: string
  image: Image
  date: Date
  type: string
  detailPreviewImage: Image
  remark: string[]
  content: React.ReactNode
}
