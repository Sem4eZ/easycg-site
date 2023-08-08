import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const XXXLFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 800,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [68, null, null, null, null, null, 110, null, null, 177],
    lineHeight: [83, null, null, null, null, null, 134, null, null, 216],
  }),
}))
