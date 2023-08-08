import { styled } from '@mui/material'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'

import { getMenuSchema } from 'entities/menu/data'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { useGetDevice } from 'shared/lib/use-get-device'

import { FilterLink } from '../link'
import { ExplanationFont } from '../typography'

interface Props {
  projectsCount: number
  closeModal: () => void
  hideDiscussHeaderButton: boolean
}

export const ModalContent: FC<Props> = ({
  projectsCount,
  closeModal,
  hideDiscussHeaderButton,
}) => {
  const { pathname } = useLocation()
  const {
    isMobileS,
    isMobileLandscape,
    isMobile,
    isMobileSLandscape,
    isTablet,
    isTabletLandscape,
  } = useGetDevice()
  const navigate = useNavigate()

  const MENU = getMenuSchema({ projectsCount })

  const isCurrentRoute = (route: string) => {
    if (route === '/') return pathname === route ? 1 : 0
    return pathname.includes(route) ? 1 : 0
  }

  const hideMenuItemIndicator =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  const showBackButton =
    isMobileS || isMobileSLandscape || isMobileLandscape || isMobile

  return (
    <>
      <nav>
        <NavigationList>
          {MENU.map((menuItem, i) => (
            <MenuItem
              key={menuItem.title}
              indicator={
                isCurrentRoute(menuItem.path) && !hideMenuItemIndicator
                  ? `0${i + 1}`
                  : ''
              }>
              <Link
                onClick={() => {
                  closeModal()
                  navigate(menuItem.path)
                }}
                active={isCurrentRoute(menuItem.path)}>
                {menuItem.title}
                {menuItem.resourcesCount && (
                  <ResourcesCount>{menuItem.resourcesCount}</ResourcesCount>
                )}
              </Link>
            </MenuItem>
          ))}
        </NavigationList>
      </nav>

      {showBackButton && (
        <MenuBackButton
          onClick={() => {
            closeModal()
            navigate(-1)
          }}>
          back
        </MenuBackButton>
      )}

      {hideDiscussHeaderButton && (
        <DiscussButtonWrapper>
          <LeaveProjectDetails buttonText="discuss a project" endIcon="" />
        </DiscussButtonWrapper>
      )}
    </>
  )
}

const NavigationList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [24, 5, 24, 5, 32, null, 22],
  }),
}))

const MenuItem = styled('li')<{ indicator: string }>(
  ({ theme, indicator }) => ({
    position: 'relative',
    '&:before': {
      content: `"${indicator}"`,
      position: 'absolute',
      top: '50%',
      left: '0',
      color: theme.palette.text.secondary,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(20),
      fontWeight: 400,
      transform: 'translateY(-50%)',
      ...getBreakpointsStylesByArray(theme, {
        fontSize: [16, null, null, null, 25],
        lineHeight: [20, null, null, null, 30],
      }),
    },
    ...getBreakpointsStylesByArray(theme, {
      paddingLeft: [0, null, null, null, null, null, 40],
    }),
  }),
)

const Link = styled(FilterLink)(() => ({
  display: 'inline-block',
  fontWeight: 700,
  cursor: 'pointer',
}))

const MenuBackButton = styled(FilterLink)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [40, 10, 40, 10, 40],
  }),
}))

const ResourcesCount = styled(ExplanationFont)(({ theme }) => ({
  display: 'inline-block',
  marginLeft: pxToRem(6),
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    top: [-9, null, null, null, null, null, -12],
  }),
}))

const DiscussButtonWrapper = styled('div')(() => ({
  marginTop: 8,
}))
