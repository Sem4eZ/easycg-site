import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import {
  Image,
  getImagePath,
  getImageSrcSetByImageObj,
} from 'entities/image/types'

import { pxToRem } from 'shared/lib/px-to-rem'
import { useGetDevice } from 'shared/lib/use-get-device'

interface Props {
  image: Image
}

export const ImagePreview = ({ image }: Props) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const { isDesktopS, isDesktop, isLaptop, isMacbook } = useGetDevice()

  const doParallax = isDesktopS || isDesktop || isLaptop || isMacbook

  const parallax = (e: MouseEvent) => {
    const parallaxEl = parallaxRef.current
    if (!parallaxEl) return

    const cvalueX = (e.pageX * -1) / 20
    const cvalueY = (e.pageY * -1) / 20

    parallaxEl.style.transform =
      'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)'
  }

  useEffect(() => {
    if (!doParallax) return

    window.addEventListener('mousemove', parallax)
    return () => {
      window.removeEventListener('mousemove', parallax)
    }
  }, [doParallax])

  return <Preview ref={parallaxRef} image={image} />
}

const Preview = styled('div')<{ image: Image }>(({ theme, image }) => {
  const imageSrcSet = getImageSrcSetByImageObj(image)
  return {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    [theme.breakpoints.up(0)]: {
      backgroundImage: `url("${imageSrcSet[0].path}")`,
    },
    [theme.breakpoints.up(400)]: {
      backgroundImage: `url("${imageSrcSet[1].path}")`,
    },
    [theme.breakpoints.up(800)]: {
      backgroundImage: `url("${imageSrcSet[2].path}")`,
    },
    [theme.breakpoints.up(1200)]: {
      backgroundImage: `url("${imageSrcSet[3].path}")`,
    },
    [theme.breakpoints.up(1600)]: {
      backgroundImage: `url("${getImagePath(image, 1920)}")`,
    },
    [theme.breakpoints.up('mobile_s')]: {
      height: pxToRem(230),
    },
    [theme.breakpoints.up('mobile_s_landscape')]: {
      height: pxToRem(300),
    },
    [theme.breakpoints.up('mobile')]: {
      height: pxToRem(288),
    },
    [theme.breakpoints.up('mobile_landscape')]: {
      height: pxToRem(400),
    },
    [theme.breakpoints.up('tablet')]: {
      height: pxToRem(517),
    },
    [theme.breakpoints.up('tablet_landscape')]: {
      height: pxToRem(517),
    },
    [theme.breakpoints.up('desktop_s')]: {
      height: pxToRem(891),
    },
    [theme.breakpoints.up('laptop')]: {
      height: pxToRem(891),
    },
    [theme.breakpoints.up('macbook')]: {
      height: pxToRem(857),
    },
    [theme.breakpoints.up('desktop')]: {
      height: pxToRem(1017),
    },
  }
})
