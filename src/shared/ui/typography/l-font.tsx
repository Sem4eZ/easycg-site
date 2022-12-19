import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

export const LFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: pxToRem(16),
  fontWeight: 700,
  [theme.breakpoints.up('tablet')]: {
    fontSize: pxToRem(25),
  },
  [theme.breakpoints.up('laptop')]: {
    fontSize: pxToRem(42),
  },
}))
