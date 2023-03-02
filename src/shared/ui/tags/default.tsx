import { styled } from '@mui/material/styles'
import { Fragment } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

interface Props {
  items: Array<React.ReactNode | string>
  type?: 'wide' | 'narrow'
  onClick?: () => void
}

export const Tags = ({ items, type = 'narrow', onClick, ...rest }: Props) => {
  return (
    <List data-type={type} onClick={onClick} {...rest}>
      {items.map((item, i) => {
        return (
          <Fragment key={i}>
            {i !== 0 && <Dot />}
            <ListItem>{item}</ListItem>
          </Fragment>
        )
      })}
    </List>
  )
}
const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  marginTop: 0,
  magrinLeft: 0,
  marginRight: 0,
  '&[data-type="wide"]': {
    ...getBreakpointsStylesByArray(theme, {
      gap: [8, null, null, null, null, null, 24, null, 36],
    }),
  },
  '&[data-type="narrow"]': {
    ...getBreakpointsStylesByArray(theme, {
      gap: [8],
    }),
  },
}))

const ListItem = styled('li')(({ theme }) => ({
  position: 'relative',
  listStyle: 'none',
  color: theme.palette.text.secondary,

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  ...getBreakpointsStylesByArray(theme, {
    fontSize: [10, null, null, 16, null, null, 25],

    minWidth: [null, null, null, null, null, null, 54],
  }),
}))

const Dot = styled('div')(({ theme }) => ({
  width: '4px',
  height: '4px',
  backgroundColor: theme.palette.text.secondary,
  borderRadius: 9999,
}))
