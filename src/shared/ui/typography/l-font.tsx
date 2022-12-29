import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const LFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, null, null, 25, null, 42],
    lineHeight: [20, null, null, null, 30, null, 51],
  }),
}))
