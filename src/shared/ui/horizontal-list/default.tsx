import { styled } from '@mui/material'
import { useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetIsTouchableVersion } from 'shared/lib/use-get-is-touchable-version'
import { useRevealBlock } from 'shared/lib/use-reveal-block'
import { spaceObj } from 'shared/theme'

import { Link } from '../link'

interface Props {
  title: string
  items: string[]
}
export const HorizontalList = ({ title, items }: Props) => {
  const isTouchableVersion = useGetIsTouchableVersion()
  const containerRef = useRef<HTMLDivElement | null>(null)
  useRevealBlock({ ref: containerRef })

  return (
    <Container ref={containerRef}>
      {isTouchableVersion ? <b>{title}</b> : title}
      <List>
        {items.map(item => (
          <li key={item}>
            <Link active={isTouchableVersion ? 1 : 0}>{item}</Link>
          </li>
        ))}
      </List>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    marginRight: [
      0,
      0,
      0,
      0,
      spaceObj.tablet,
      0,
      spaceObj.desktop_s,
      spaceObj.laptop,
      spaceObj.macbook,
      spaceObj.desktop,
    ],
  }),
}))

const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  listStyle: 'none',
  paddingLeft: 0,
  marginBottom: 0,
  gridColumnGap: 25,
  gridRowGap: 24,

  ...getBreakpointsStylesByArray(theme, {
    marginTop: [26, 16, null, null, null, null, 8],
  }),
  ' a': {
    marginRight: 3,
    '&:hover': {
      marginRight: 0,
    },
  },
}))
