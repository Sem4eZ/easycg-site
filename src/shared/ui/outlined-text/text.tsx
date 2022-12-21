import { Theme, styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

export interface Props {
  children: string
  viewBoxWidth: number
  type?: 'header' | 'section'
  animate?: boolean
}

export const TextOutlined = ({
  children,
  viewBoxWidth,
  type = 'section',
  animate = false,
  ...rest
}: Props) => {
  const intersectionContainerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  function fillText() {
    const text = textRef.current
    const intersectionContainer = intersectionContainerRef.current
    if (!text || !intersectionContainer) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const persentage = Math.round(
            ((window.innerHeight -
              text.getBoundingClientRect().top -
              text.offsetHeight / 2) *
              100) /
              text.offsetHeight,
          )

          setTimeout(() => {
            text.style.clipPath = `inset(${100 - persentage}% 0 0 0)`
          })
        }
      })
    })

    observer.observe(intersectionContainer)
  }

  useEffect(() => {
    if (!animate || window.innerWidth < 1366) return
    window.addEventListener('scroll', fillText)
  }, [])

  return (
    <div ref={intersectionContainerRef}>
      <Container data-type={type} {...rest}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${viewBoxWidth} 799`}>
          <OutlinedText x={0} y="600" data-type={type}>
            {children}
          </OutlinedText>
        </svg>
        <Filler ref={textRef} data-type={type}>
          {children}
        </Filler>
      </Container>
    </div>
  )
}

const fonts = (theme: Theme) => ({
  '&[data-type="header"]': {
    fontSize: pxToRem(265),
    lineHeight: pxToRem(323),
  },
  '&[data-type="section"]': {
    fontSize: pxToRem(56),
    lineHeight: pxToRem(68),
  },
  [theme.breakpoints.up('tablet')]: {
    '&[data-type="header"]': {
      fontSize: pxToRem(360),
      lineHeight: pxToRem(438),
    },
    '&[data-type="section"]': {
      fontSize: pxToRem(185),
      lineHeight: pxToRem(225),
    },
  },
  [theme.breakpoints.up('tablet_landscape')]: {
    '&[data-type="header"]': {
      fontSize: pxToRem(360),
      lineHeight: pxToRem(438),
    },
    '&[data-type="section"]': {
      fontSize: pxToRem(185),
      lineHeight: pxToRem(225),
    },
  },
  [theme.breakpoints.up('laptop')]: {
    '&[data-type="header"]': {
      fontSize: pxToRem(534),
      lineHeight: pxToRem(650),
    },
    '&[data-type="section"]': {
      fontSize: pxToRem(534),
      lineHeight: pxToRem(650),
    },
  },
  [theme.breakpoints.up('desktop')]: {
    '&[data-type="header"]': {
      fontSize: pxToRem(658),
      lineHeight: pxToRem(801),
    },
    '&[data-type="section"]': {
      fontSize: pxToRem(658),
      lineHeight: pxToRem(801),
    },
  },
})

const Container = styled('div')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  svg: {
    position: 'absolute',
    ...getBreakpointsStylesByArray(theme, {
      top: [null, null, null, null, null, null, 4.5, 4.5],
    }),
    width: '100%',
  },
}))

const Filler = styled('div')(({ theme }) => ({
  display: 'inline-block',
  fontFamily: 'Proxima Nova, sans-serif',
  fontWeight: 700,
  color: theme.palette.inverted,
  clipPath: 'inset(100% 0 0 0)',
  ...fonts(theme),
}))

const Text = styled('text')(() => ({
  fontFamily: 'Proxima Nova, sans-serif',
  fontWeight: 700,
  paintOrder: 'stroke',
  strokeLinejoin: 'round',
  '&[data-type="header"]': {
    fontSize: pxToRem(658),
    lineHeight: pxToRem(801),
  },
  '&[data-type="section"]': {
    fontSize: pxToRem(658),
    lineHeight: pxToRem(801),
  },
}))

export const OutlinedText = styled(Text)(({ theme }) => ({
  strokeWidth: '8px',
  stroke: theme.palette.inverted,
  fill: 'transparent',
}))
