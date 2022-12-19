import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

import { Link } from './default'

export const FilterLink = styled(Link)(({ theme }) => ({
  fontSize: pxToRem(25),
  [theme.breakpoints.up('laptop')]: {
    fontSize: pxToRem(42),
    paddingBottom: pxToRem(8),
  },
}))
