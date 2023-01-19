export interface Image {
  path: string
  name: string
  fileType: string
  alt: string
}

const IMAGE_SIZES = [400, 800, 1200, 1600]

export const getImageSrcSetByImageObj = (image: Image) => {
  return IMAGE_SIZES.map(size => {
    return {
      path: getImagePath(image, size),
      media: `(max-width: ${size}px)`,
    }
  })
}

export const getImagePath = (image: Image, size: number) => {
  return `${image.path}${image.name}-${size}w.${image.fileType}`
}
