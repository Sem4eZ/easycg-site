import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

export const ExplanationFont = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginLeft: pxToRem(16),
    color: theme.palette.text.secondary,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(20),
    fontWeight: 400,
    [theme.breakpoints.up('tablet')]: {
      fontSize: pxToRem(25),
      lineHeight: pxToRem(30),
    },
  }),
)
