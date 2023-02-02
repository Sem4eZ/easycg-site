import { styled } from '@mui/material/styles'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Link } from 'shared/ui/link'

import { services } from '../data'
import { Service } from '../types'

const getWidthByServiceType = (type: Service['type']) => {
  switch (type) {
    case 'mobile':
      return 87
    case 'web':
      return 60
    default:
      return 50
  }
}
export const ServicesHeroMenu = () => {
  return (
    <Container>
      <List>
        {services
          .filter(service => service.type !== 'UXUI')
          .map((service, i) => {
            return (
              <li
                key={service.type}
                style={{
                  minWidth: `${getWidthByServiceType(service.type)}px`,
                }}>
                <Link to={`${PAGES.Services}#${service.type}`}>
                  {`${service.shortName}${
                    i !== services.length - 1 ? '/' : ''
                  }`}
                </Link>
              </li>
            )
          })}
      </List>
    </Container>
  )
}

const Container = styled('nav')(({ theme }) => ({
  alignSelf: 'flex-start',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: [0, null, null, null, null, null, null, null, 11],
    paddingRight: [0, null, null, null, null, null, null, null, 32],
  }),
}))

const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  ...getBreakpointsStylesByArray(theme, {
    gap: [0, null, null, null, null, null, 50, null, null, 64],
  }),
  '& a': {
    ...getBreakpointsStylesByArray(theme, {
      fontWeight: [400, null, null, null, null, null, 700, null, 800],
    }),
  },
}))
