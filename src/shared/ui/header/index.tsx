import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
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
  const headerRef = useRef<HTMLDivElement | null>(null)

  const openModal = () => {
    setOpen(true)
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
    <Container active={isHeaderBlur} ref={headerRef}>
      {hideLanguageChanging && headerLeftContent}
      <CenterPart>
        <LogoWrapper to={PAGES.HomePage}>
          <Logo />
        </LogoWrapper>
      </CenterPart>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!hideDiscussHeaderButton && (
          <LeaveProjectDetails
            buttonText="discuss a project"
            variant="contained"
            size="small"
            endIcon=""
          />
        )}
        <StyledIconButton onClick={openModal}>
          <MenuToggler>
            <div />
            <div />
          </MenuToggler>
        </StyledIconButton>
      </div>
      <ModalStyled
        open={open}
        title="Site navigation"
        hideTitle={true}
        onClose={closeModal}>
        <ModalContent
          projectsCount={projectsCount}
          closeModal={closeModal}
          hideDiscussHeaderButton={hideDiscussHeaderButton}
        />
      </ModalStyled>
    </Container>,
    document.getElementById('header') ?? document.body,
  )
}

const Container = styled('div')<{ active: boolean }>(({ theme, active }) => ({
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
  transition: '0.5s',
  background: active
    ? theme.palette.mode === 'light'
      ? 'linear-gradient(247.32deg, rgba(250, 250, 255, 0.2) 10.17%, rgba(236, 236, 236, 0.2) 110.17%)'
      : 'linear-gradient(247.32deg, rgba(32, 34, 46, 0.2) 0%, rgba(30, 28, 27, 0.2) 100%)'
    : undefined,
  backdropFilter: active ? 'blur(2px)' : undefined,
  borderBottom: active
    ? theme.palette.mode === 'light'
      ? `1px solid ${theme.palette.text.secondary}`
      : `1px solid ${theme.palette.inverted}`
    : undefined,
}))

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

const StyledIconButton = styled(IconButton)(() => ({
  marginLeft: 48,
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
