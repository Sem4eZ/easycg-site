import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const XXLFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [42, null, null, null, null, 68, null, null, 100],
    lineHeight: [51, null, null, null, null, 83, null, null, 134],
  }),
}))
