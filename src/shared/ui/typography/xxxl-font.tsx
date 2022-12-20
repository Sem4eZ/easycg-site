import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

export const XXXLFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: pxToRem(68),
  lineHeight: pxToRem(83),
  fontWeight: 800,
  [theme.breakpoints.up('laptop')]: {
    fontSize: pxToRem(110),
    lineHeight: pxToRem(134),
    fontWeight: 700,
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: pxToRem(117),
    lineHeight: pxToRem(216),
  },
}))
