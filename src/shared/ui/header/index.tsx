import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link as ReactRouterDomLink } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'

import { PAGES } from 'shared/config'
import { ArrowFatIcon } from 'shared/icons/arrow-fat'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'

import { Language } from '../language'
import { Logo } from '../logo'
import { Modal } from '../modal/default'
import { ModalContent } from './modal-content'

interface Props {
  projectsCount: number
}

export const Header = ({ projectsCount }: Props) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isHeaderBlur, setIsHeaderBlue] = useState(false)

  const switchModal = () => {
    setOpen(value => !value)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const isMainpageRoute = () => {
    return pathname === '/'
  }

  const {
    isMobileS,
    isMobileLandscape,
    isMobile,
    isMobileSLandscape,
    isTablet,
    isTabletLandscape,
  } = useGetDevice()

  const fixCloseIcon = isMobileLandscape || isMobile || isMobileS

  const hideLanguageChanging =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  const hideDiscussHeaderButton =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  let headerLeftContent = <div />
  // if (!hideLanguageChanging) {
  //   headerLeftContent = <Language />
  // } else if (!isMainpageRoute()) {
  if (!isMainpageRoute()) {
    headerLeftContent = (
      <HeaderBackButton
        startIcon={<ArrowFatIcon />}
        endIcon=""
        onClick={() => navigate(-1)}>
        <HeaderBackButtonText>back</HeaderBackButtonText>
      </HeaderBackButton>
    )
  }

  const onScroll = () => setIsHeaderBlue(window.scrollY >= 150)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return createPortal(
    <BlurContainer isActive={isHeaderBlur && !open}>
      <Container isActive={open}>
        {!open && (
          <>
            {hideLanguageChanging && headerLeftContent}
            <CenterPart>
              <LogoWrapper to={PAGES.HomePage}>
                <Logo />
              </LogoWrapper>
            </CenterPart>
            {!hideDiscussHeaderButton && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: 48,
                }}>
                <LeaveProjectDetails
                  buttonText="discuss a project"
                  variant="contained"
                  size="small"
                  endIcon=""
                />
              </div>
            )}
          </>
        )}

        <StyledIconButton onClick={switchModal} isActive={open}>
          <MenuToggler isActive={open} fixCloseIcon={fixCloseIcon}>
            <div />
            <div />
          </MenuToggler>
        </StyledIconButton>
        <ModalStyled open={open} title="Site navigation" hideTitle={true}>
          <ModalContent
            projectsCount={projectsCount}
            closeModal={closeModal}
            hideDiscussHeaderButton={hideDiscussHeaderButton}
          />
        </ModalStyled>
      </Container>
    </BlurContainer>,
    document.getElementById('header') ?? document.body,
  )
}

const BlurContainer = styled('div')<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    background: isActive
      ? theme.palette.mode === 'light'
        ? 'linear-gradient(247.32deg, rgba(250, 250, 255, 0.2) 10.17%, rgba(236, 236, 236, 0.2) 110.17%)'
        : 'linear-gradient(247.32deg, rgba(32, 34, 46, 0.2) 0%, rgba(30, 28, 27, 0.2) 100%)'
      : undefined,
    backdropFilter: isActive ? 'blur(10px)' : undefined,
    borderBottom: isActive
      ? theme.palette.mode === 'light'
        ? `1px solid ${theme.palette.text.secondary}`
        : `1px solid ${theme.palette.inverted}`
      : undefined,
  }),
)

const Container = styled('div')<{ isActive: boolean }>(
  ({ theme, isActive }) => {
    const display = isActive
      ? {
          display: 'flex',
          justifyContent: 'end',
        }
      : {
          display: 'grid',
          alignItems: 'center',
        }

    return {
      ...display,
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
          '48px 1fr 48px',
          '48px 1fr 48px',
          null,
          '55px 1fr auto',
          null,
          '50px 1fr auto',
        ],
      }),
      transition: '0.5s',
    }
  },
)

const CenterPart = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

const LogoWrapper = styled(ReactRouterDomLink)(() => ({
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  color: 'inherit',
}))

const StyledIconButton = styled(IconButton)<{ isActive: boolean }>(
  ({ isActive }) => ({
    position: isActive ? 'fixed' : 'relative',
    zIndex: 2000,
  }),
)

const MenuToggler = styled('div')<{ isActive: boolean; fixCloseIcon: boolean }>(
  ({ theme, isActive, fixCloseIcon }) => ({
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
      transition: '0.2s',

      '&:first-of-type': {
        ...getBreakpointsStylesByArray(theme, {
          marginBottom: [4, null, null, null, 6],
        }),
        transform: isActive
          ? fixCloseIcon
            ? 'rotate(45deg) translate(3px, 3px)'
            : 'rotate(45deg) translate(4px, 4px)'
          : undefined,
      },
      '&:last-of-type': {
        transform: isActive ? 'rotate(-45deg) translate(3px, -3px)' : undefined,
      },
    },
  }),
)

const ModalStyled = styled(Modal)(({ theme }) => ({
  zIndex: 1299,
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

  '& .MuiIconButton-root': {
    ['@media (min-width: 1920px) ']: {
      right: `calc((100% - 1920px) / 2 + 112px)`,
    },
  },
}))

const HeaderBackButton = styled(Button)(() => ({}))

const HeaderBackButtonText = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, 'inline-block'],
    fontSize: [16, null, null, null, 25],
  }),
}))
