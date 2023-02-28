import { LinkProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC, useEffect, useRef, useState } from 'react'
import { LinkProps as ReactRouterLinkProps } from 'react-router-dom'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { FilterLink } from 'shared/ui/link'

type Props = Omit<LinkProps, 'active'> &
  Omit<ReactRouterLinkProps, 'to'> & {
    active?: 1 | 0
    to?: ReactRouterLinkProps['to']
  }

export const FilterLinkWrapper: FC<Props> = ({ children, ...rest }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(ref.current?.firstElementChild?.clientWidth ?? 100)
  }, [ref.current])

  return (
    <Root value={`calc(${width}px + 4px)`} ref={ref}>
      <FilterLink {...rest}>{children}</FilterLink>
    </Root>
  )
}

export const Root = styled('div')<{ value: string }>(({ value }) => ({
  width: value,
}))

export const Link = styled(FilterLink)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [25, null, null, null, null, null, 42],
    lineHeight: [30, null, null, null, null, null, 51],
    paddingBottom: [0, null, null, null, null, null, 8],
  }),
}))
