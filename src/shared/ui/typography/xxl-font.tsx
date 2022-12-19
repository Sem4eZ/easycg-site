import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

export const XXLFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: pxToRem(42),
  fontWeight: 700,
  [theme.breakpoints.up('laptop')]: {
    fontSize: pxToRem(110),
  },
}))
