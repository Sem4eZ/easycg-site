import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

import { Link } from './default'

export const FilterLink = styled(Link)(({ theme }) => ({
  fontSize: pxToRem(25),
  lineHeight: pxToRem(30),
  [theme.breakpoints.up('laptop')]: {
    fontSize: pxToRem(42),
    lineHeight: pxToRem(51),
    paddingBottom: pxToRem(8),
  },
}))
