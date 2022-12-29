import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

import { Link } from './default'

export const FilterLink = styled(Link)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [25, null, null, null, null, null, 42],
    lineHeight: [30, null, null, null, null, null, 51],
    paddingBottom: [0, null, null, null, null, null, 8],
  }),
}))
