import { styled } from '@mui/material/styles'
import { Link as ReactRouterDomLink } from 'react-router-dom'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { LFont, XLFont } from 'shared/ui/typography'

import { Project } from '../types'

type Props = Pick<Project, 'id' | 'name' | 'tags'>

export const GalleryProjectCardRow = ({ id, name, tags }: Props) => {
  return (
    <Link to={`${PAGES.Projects}/${id}`}>
      <Name>{name}</Name>
      <Tags>{tags.join('/ ')}</Tags>
    </Link>
  )
}

const Link = styled(ReactRouterDomLink)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'unset',
  color: 'inherit',
  justifyContent: 'space-between',
  borderBottomStyle: 'solid',
  borderBottomColor: theme.palette.text.disabled,
  ...getBreakpointsStylesByArray(theme, {
    gap: [16, 47],
    flexDirection: ['column', 'row'],
    paddingBottom: [8, 16, 8, 16, 24, 16],
    alignItems: ['flex-end', 'center'],
    borderBottomWidth: [2, null, null, null, null, null, null, null, null, 3],
    paddingTop: [32, 48, 24, 32, 40, null, 64],
  }),
}))

const Name = styled(XLFont)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    width: ['100%', '50%'],
  }),
}))
const Tags = styled(LFont)(({ theme }) => ({}))
