import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

export const XLFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: pxToRem(25),
  fontWeight: 700,
  [theme.breakpoints.up('laptop')]: {
    fontSize: pxToRem(42),
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: pxToRem(68),
  },
}))
