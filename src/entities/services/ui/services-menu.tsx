import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { visuallyHiddenStyles } from 'shared/ui/accesibility'

import { services } from '../data'

export const ServicesMenu = () => {
  return (
    <nav>
      <List>
        {services.map(service => {
          return (
            <li key={service.type}>
              <ServiceIcon to={`${PAGES.Services}#${service.type}`}>
                <Title>{service.name}</Title>
                {service.icon}
              </ServiceIcon>
            </li>
          )
        })}
      </List>
    </nav>
  )
}

const List = styled('ul')(() => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
}))

const ServiceIcon = styled(Link)(({ theme }) => ({
  display: 'block',
  color: theme.palette.text.secondary,
  transition: 'color .2s',
  '&:hover': {
    color: theme.palette.accent,
  },
  ...getBreakpointsStylesByArray(theme, {
    height: [32, null, null, 48, null, null, 134],
  }),
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))

const Title = styled('span')(() => visuallyHiddenStyles)
