import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const LFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, 18, 18, 22, 22, 25, 38],
    lineHeight: [20, null, null, null, 30, null, 51],
  }),
}))
