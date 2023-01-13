import { Link as BaseLink, LinkProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from 'react-router-dom'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

export type Props = Omit<LinkProps, 'active'> &
  Omit<ReactRouterLinkProps, 'to'> & {
    active?: 1 | 0
    to?: ReactRouterLinkProps['to']
  }
export const Link = styled(({ to, ...rest }: Props) => {
  if (to)
    return (
      <ReactRouterLink to={to}>
        <BaseLink {...rest} component="span" />
      </ReactRouterLink>
    )
  return <BaseLink {...rest} />
})<Props>(({ theme, active = 0 }) => {
  return {
    display: 'inline-block',
    position: 'relative',
    color: active ? theme.palette.text.primary : theme.palette.text.secondary,
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
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, null, null, 25],
      paddingBottom: [0, null, null, null, null, null, 8],
    }),
  }
})
