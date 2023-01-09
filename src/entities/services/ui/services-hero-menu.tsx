import { styled } from '@mui/material/styles'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Link } from 'shared/ui/link'

import { services } from '../data'

export const ServicesHeroMenu = () => {
  return (
    <Container>
      <List>
        {services.map((service, i) => {
          return (
            <li>
              <Link href={`${PAGES.Services}#${service.type}`}>
                {`${service.shortName}${i !== services.length - 1 ? '/' : ''}`}
              </Link>
            </li>
          )
        })}
      </List>
    </Container>
  )
}

const Container = styled('nav')(() => ({
  alignSelf: 'flex-start',
}))

const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  ...getBreakpointsStylesByArray(theme, {
    gap: [0, null, null, null, null, null, 64],
  }),
  '& a': {
    ...getBreakpointsStylesByArray(theme, {
      fontWeight: [400, null, null, null, null, null, 700, null, 800],
    }),
  },
}))
