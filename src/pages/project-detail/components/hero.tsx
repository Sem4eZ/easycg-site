import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'

interface Props {
  image: string
  alt: string
}

export const ProjectDetailHero = ({ image, alt }: Props) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const { isDesktopS, isDesktop, isLaptop, isMacbook } = useGetDevice()

  const parallax = (e: MouseEvent) => {
    const parallaxEl = parallaxRef.current
    if (!parallaxEl) return

    const cvalueX = (e.pageX * -1) / 20
    const cvalueY = (e.pageY * -1) / 20

    parallaxEl.style.transform =
      'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)'
  }

  useEffect(() => {
    if (!isDesktopS && !isDesktop && !isLaptop && !isMacbook) return
    window.addEventListener('mousemove', parallax)
    return () => {
      window.removeEventListener('mousemove', parallax)
    }
  }, [])

  return (
    <Container>
      <Image ref={parallaxRef} style={{ backgroundImage: `url(${image})` }} />

      <Remark>
        *Before we start, you should know one thing. Content that we made can be
        different from owner’s content. We gave an ideas, clients develop it
        themselves
      </Remark>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [8, 33, 49, 41, 144, 74, 49, null, 14, 131],
  }),
}))

const Image = styled('div')(({ theme }) => ({
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  ...getBreakpointsStylesByArray(theme, {
    height: [230, 300, 288, 400, 517, null, 891, null, 857, 1017],
  }),
}))

const Remark = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      `calc(208px - ${spaceObj.tablet}px)`,
      `calc(279px - ${spaceObj.tablet_horizontal}px)`,
      `calc(507px - ${spaceObj.desktop_s}px)`,
      null,
      `calc(652px - ${spaceObj.macbook}px)`,
      `calc(839px - ${spaceObj.desktop}px)`,
    ],
    paddingRight: spaceArr,
    marginTop: [72, null, 50, 104, 93, 80, 184, null, 270, 248],
  }),
}))
