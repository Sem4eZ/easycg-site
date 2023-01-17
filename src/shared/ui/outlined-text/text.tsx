import { useTheme } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

type TextType = 'header' | 'section' | 'sectionSmall'

export interface Props {
  children: string
  viewBoxWidth: number
  type?: TextType
  animate?: boolean
}

export const TextOutlined = ({
  children,
  viewBoxWidth,
  type = 'section',
  animate = false,
  ...rest
}: Props) => {
  const { breakpoints } = useTheme()
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
    if (!animate || window.innerWidth < breakpoints.values.desktop_s) return
    window.addEventListener('scroll', fillText)
    return () => {
      window.removeEventListener('scroll', fillText)
    }
  }, [])

  return (
    <div ref={intersectionContainerRef}>
      <Container data-type={type} {...rest}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${viewBoxWidth} 799`}
          data-type={type}>
          <OutlinedText x={0} y={getYOffset(type)} data-type={type}>
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

const getYOffset = (type: TextType) => {
  switch (type) {
    case 'header':
      return 605
    case 'section':
      return 602
    case 'sectionSmall':
      return 600
  }
}

const fonts = (theme: Theme) => ({
  '&[data-type="header"]': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [256, null, null, null, 360, null, 543, null, 658],
      lineHeight: [323, null, null, null, 438, null, 650, null, 801],
    }),
  },
  '&[data-type="section"]': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [56, null, null, null, 185, null, 534, null, 658],
      lineHeight: [68, null, null, null, 225, null, 650, null, 801],
    }),
  },
  '&[data-type="sectionSmall"]': {
    fontSize: [0, null, null, null, 110, null, 278],
    lineHeight: [0, null, null, null, 133, null, 338],
  },
})

const Container = styled('div')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  svg: {
    position: 'absolute',
    width: '100%',
    '&[data-type="header"]': {
      ...getBreakpointsStylesByArray(theme, {
        top: [5, null, null, null, 0, null, -5, null, 1],
      }),
    },
    '&[data-type="section"]': {
      ...getBreakpointsStylesByArray(theme, {
        top: [0],
      }),
    },
    '&[data-type="sectionSmall"]': {
      top: [0],
    },
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
  '&[data-type="sectionSmall"]': {
    fontSize: pxToRem(278),
    lineHeight: pxToRem(338),
  },
}))

export const OutlinedText = styled(Text)(({ theme }) => ({
  strokeWidth: '8px',
  stroke: theme.palette.inverted,
  fill: 'transparent',
}))
