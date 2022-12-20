import { Theme, styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

export interface Props {
  children: string
  viewBoxWidth: number
  type?: 'header' | 'section'
}

export const TextOutlined = ({
  children,
  viewBoxWidth,
  type = 'section',
}: Props) => (
  <Container data-type={type}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} 799`}>
      <OutlinedText x={0} y="600" data-type={type}>
        {children}
      </OutlinedText>
    </svg>
    <Filler data-type={type}>{children}</Filler>
  </Container>
)

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

const Container = styled('div')(() => ({
  display: 'inline-block',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    '& div': {
      transform: 'translateY(0)',
    },
  },
  svg: {
    position: 'absolute',
    top: '1.5px',
    width: '100%',
  },
}))

const Filler = styled('div')(({ theme }) => ({
  display: 'inline-block',
  fontFamily: 'Proxima Nova, sans-serif',
  fontWeight: 700,
  color: theme.palette.inverted,
  transform: 'translateY(100%)',
  transition: 'transform .3s ease-out',
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
