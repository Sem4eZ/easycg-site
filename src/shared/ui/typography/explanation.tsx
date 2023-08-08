import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

export const ExplanationFont = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginLeft: pxToRem(16),
    color: theme.palette.text.secondary,
    fontWeight: 400,
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, null, null, 25],
      lineHeight: [20, null, null, null, null, null, 30],
    }),
  }),
)
