import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const HorizontalSliderContainer = styled('section')(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [71, 63, 71, 63, 72, null, 87, 166],
    paddingBottom: [71, 63, 71, 63, 72, null, 87, 166],
    gap: [48, null, null, 54, 71, 71, 96],
  }),
}))
