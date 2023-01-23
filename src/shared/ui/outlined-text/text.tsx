import { useTheme } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { useGetDevice } from 'shared/lib/use-get-device'

type TextType = 'header' | 'headerSmall' | 'section'

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

  const {
    isTablet,
    isTabletLandscape,
    isDesktopS,
    isLaptop,
    isMacbook,
    isDesktop,
  } = useGetDevice()

  const doAnimate =
    isTablet ||
    isTabletLandscape ||
    isDesktopS ||
    isLaptop ||
    isMacbook ||
    isDesktop

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
              (isTablet ? text.offsetHeight * 2 : text.offsetHeight / 2)) *
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
    if (!animate || !doAnimate) return
    window.addEventListener('scroll', fillText)
    return () => {
      window.removeEventListener('scroll', fillText)
    }
  }, [doAnimate])

  return (
    <Container ref={intersectionContainerRef} data-type={type} {...rest}>
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
  )
}

const getYOffset = (type: TextType) => {
  switch (type) {
    case 'header':
      return 605
    case 'headerSmall':
      return 605
    case 'section':
      return 602
  }
}

const fonts = (theme: Theme) => ({
  '&[data-type="header"]': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [256, null, null, null, 360, null, 543, null, 658],
      lineHeight: [323, null, null, null, 438, null, 650, null, 801],
    }),
  },
  '&[data-type="headerSmall"]': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [256, null, null, null, 360, null, 543, null, 658],
      lineHeight: [323, null, null, null, 438, null, 650, null, 801],
    }),
  },
  '&[data-type="section"]': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [56, null, null, null, 185, null, null, 534, 658],
      lineHeight: [68, null, null, null, 225, null, null, 650, 801],
    }),
  },
})

const Container = styled('div')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  '&[data-type="headerSmall"]': {
    ...getBreakpointsStylesByArray(theme, {
      transform: [
        'scale(0.415)',
        null,
        null,
        'scale(1)',
        'scale(0.776)',
        null,
        null,
        'scale(1)',
        'scale(0.61)',
        'scale(1)',
      ],
    }),
  },
  svg: {
    position: 'absolute',
    width: '100%',
    '&[data-type="header"]': {
      ...getBreakpointsStylesByArray(theme, {
        top: [5, null, null, null, 0, null, -5, null, 1],
      }),
    },
    '&[data-type="headerSmall"]': {
      ...getBreakpointsStylesByArray(theme, {
        top: [5, null, null, null, 0, null, -5, null, 1],
      }),
    },
    '&[data-type="section"]': {
      ...getBreakpointsStylesByArray(theme, {
        top: [0, null, null, null, null, null, 0.4, null, 1],
      }),
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
  fontSize: pxToRem(658),
  lineHeight: pxToRem(801),
}))

export const OutlinedText = styled(Text)(({ theme }) => ({
  strokeWidth: '8px',
  stroke: theme.palette.inverted,
  fill: 'transparent',
}))
