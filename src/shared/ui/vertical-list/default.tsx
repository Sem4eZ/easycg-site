import { styled } from '@mui/material'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceObj } from 'shared/theme'

import { Link } from '../link'

interface Props {
  title: string
  items: string[]
}
export const VerticalList = ({ title, items }: Props) => {
  return (
    <Container>
      {title}
      <List>
        {items.map(item => (
          <Link>{item}</Link>
        ))}
      </List>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginRight: [
      0,
      0,
      0,
      0,
      spaceObj.tablet,
      0,
      spaceObj.laptop,
      spaceObj.desktop,
    ],
  }),
}))

const List = styled('ul')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  listStyle: 'none',
  paddingLeft: 0,
}))
