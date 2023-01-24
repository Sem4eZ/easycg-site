import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const ModalTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [25, null, null, null, null, null, 38],
    lineHeight: [30, null, null, null, null, null, 44],
    marginBottom: [40, 20, 40, 20, 40],
  }),
}))
