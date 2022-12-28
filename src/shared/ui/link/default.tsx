import { Link as BaseLink, LinkProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'

export type Props = Omit<LinkProps, 'active'> & { active?: 1 | 0 }
export const Link = styled(BaseLink)<Props>(({ theme, active = 0 }) => {
  return {
    display: 'inline-block',
    position: 'relative',
    color: active ? theme.palette.text.primary : theme.palette.text.secondary,
    fontSize: pxToRem(16),
    fontWeight: active ? 700 : 400,
    textDecoration: 'none',
    overflow: 'hidden',
    '&:after': {
      content: "''",
      position: 'absolute',
      left: active ? 0 : '-100%',
      bottom: 0,
      width: '100%',
      height: pxToRem(2),
      backgroundColor: theme.palette.accent,
      transition: 'left .2s',
    },
    '&:hover': {
      color: theme.palette.text.primary,
      fontWeight: 700,
      '&:after': {
        left: '0',
      },
    },
    [theme.breakpoints.up('laptop')]: {
      fontSize: pxToRem(25),
      paddingBottom: pxToRem(8),
    },
  }
})
