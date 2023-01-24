import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link as ReactRouterDomLink } from 'react-router-dom'

import { getMenuSchema } from 'entities/menu/data'

import { PAGES } from 'shared/config'
import { ArrowFatIcon } from 'shared/icons/arrow-fat'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'

import { Language } from '../language'
import { FilterLink } from '../link'
import { Logo } from '../logo'
import { Modal } from '../modal/default'
import { ExplanationFont } from '../typography'

interface Props {
  projectsCount: number
}

export const Header = ({ projectsCount }: Props) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
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

  const isMainpageRoute = () => {
    return pathname === '/'
  }

  const MENU = getMenuSchema({ projectsCount })

  const {
    isMobileS,
    isMobileLandscape,
    isMobile,
    isMobileSLandscape,
    isTablet,
    isTabletLandscape,
  } = useGetDevice()

  const hideMenuItemIndicator =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  const hideLanguageChanging =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  const showBackButton =
    isMobileS || isMobileSLandscape || isMobileLandscape || isMobile

  let headerLeftContent = <div />
  if (!hideLanguageChanging) {
    headerLeftContent = <Language />
  } else if (!isMainpageRoute()) {
    headerLeftContent = (
      <HeaderBackButton
        startIcon={<ArrowFatIcon />}
        endIcon=""
        onClick={() => navigate(-1)}>
        <HeaderBackButtonText>back</HeaderBackButtonText>
      </HeaderBackButton>
    )
  }

  return (
    <Container>
      {headerLeftContent}
      <LogoWrapper to={PAGES.HomePage}>
        <Logo />
      </LogoWrapper>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={openModal} style={{ right: '-8px' }}>
          <MenuToggler>
            <div />
            <div />
          </MenuToggler>
        </IconButton>
      </div>
      <ModalStyled
        open={open}
        title="Site navigation"
        hideTitle={true}
        onClose={closeModal}>
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
      </ModalStyled>
    </Container>
  )
}

const Container = styled('header')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  alignItems: 'center',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [51, 41, 48, null, 32, 24, 58],
    paddingBottom: [51, 41, 48, null, 32, 24, 58],
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    gridTemplateColumns: [
      '48px 1fr 48px',
      null,
      null,
      '155px 1fr 155px',
      '171px 1fr 171px',
      null,
      '55px 1fr auto',
      null,
      '50px 1fr auto',
    ],
  }),
}))

const LogoWrapper = styled(ReactRouterDomLink)(() => ({
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  color: 'inherit',
}))

const MenuToggler = styled('div')(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    width: [32, null, null, null, 39, null, 44],
    height: [32, null, null, null, 39, null, 44],
  }),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& div': {
    width: '100%',
    height: '4px',
    backgroundColor: theme.palette.text.primary,
    '&:first-of-type': {
      ...getBreakpointsStylesByArray(theme, {
        marginBottom: [4, null, null, null, 6],
      }),
    },
  },
}))

const NavigationList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [24, null, null, null, 32, null, 22],
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

const Link = styled(FilterLink)(({ theme }) => ({
  display: 'inline-block',
  fontWeight: 700,
  cursor: 'pointer',
}))

const ResourcesCount = styled(ExplanationFont)(({ theme }) => ({
  display: 'inline-block',
  marginLeft: pxToRem(6),
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    top: [-9, null, null, null, null, null, -12],
  }),
}))

const ModalStyled = styled(Modal)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: 0,
  },
  '& .MuiDialog-paper': {
    width: '100%',
    maxWidth: '100%',
    margin: 0,
    height: '100%',
    maxHeight: 'unset',
    ...getBreakpointsStylesByArray(theme, {
      paddingLeft: [
        spaceObj.se,
        spaceObj.se_horizontal,
        spaceObj.ip13,
        spaceObj.ip13_horizontal,
        80,
        311,
        null,
        240,
        400,
      ],
      paddingRight: [
        spaceObj.se,
        spaceObj.se_horizontal,
        spaceObj.ip13,
        spaceObj.ip13_horizontal,
        80,
        311,
        null,
        240,
        400,
      ],
    }),
  },
}))

const MenuBackButton = styled(FilterLink)(({ theme }) => ({
  fontWeight: 700,
  marginTop: 48,
  color: theme.palette.text.secondary,
}))

const HeaderBackButton = styled(Button)(() => ({}))

const HeaderBackButtonText = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, 'inline-block'],
    fontSize: [16, null, null, null, 25],
  }),
}))
