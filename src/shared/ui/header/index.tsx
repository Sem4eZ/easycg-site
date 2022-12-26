import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { projects } from 'entities/project/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

import { FilterLink } from '../link'
import { Modal } from '../modal/default'
import { ExplanationFont } from '../typography'

const MENU: {
  title: string
  path: string
  resourcesCount?: number
}[] = [
  {
    title: 'home',
    path: PAGES.HomePage,
  },
  {
    title: 'work',
    path: PAGES.Projects,
    resourcesCount: projects.length,
  },
  {
    title: 'services',
    path: PAGES.Services,
  },
  {
    title: 'about us',
    path: PAGES.AboutUs,
  },
  {
    title: 'blog.',
    path: PAGES.Blog,
  },
  {
    title: 'contacts',
    path: PAGES.Contact,
  },
]

export const Header = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const isCurrentRoute = (route: string) => {
    if (route === '/') return pathname === route ? 1 : 0
    return pathname.includes(route) ? 1 : 0
  }

  return (
    <div>
      Change lang icon Logo
      <IconButton onClick={openModal}>+</IconButton>
      <Modal
        open={open}
        title="Site navigation"
        hideTitle={true}
        onClose={closeModal}>
        <nav>
          <NavigationList>
            {MENU.map(menuItem => (
              <li>
                <Link
                  href={menuItem.path}
                  active={isCurrentRoute(menuItem.path)}>
                  {menuItem.title}
                  {menuItem.resourcesCount && (
                    <ResourcesCount>{menuItem.resourcesCount}</ResourcesCount>
                  )}
                </Link>
              </li>
            ))}
          </NavigationList>
        </nav>
      </Modal>
    </div>
  )
}

const NavigationList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [24, null, null, null, 32, null, 44],
  }),
}))

const Link = styled(FilterLink)(({ theme }) => ({
  display: 'flex',
}))

const ResourcesCount = styled(ExplanationFont)(theme => ({
  marginLeft: pxToRem(6),
}))
