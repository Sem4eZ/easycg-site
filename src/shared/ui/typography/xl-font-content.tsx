import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const XLFontContent = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontWeight: 700,
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [25, null, null, null, null, null, 42, null, 68],
      lineHeight: [30, null, null, null, null, null, 51, null, 83],
    }),
  }),
)
