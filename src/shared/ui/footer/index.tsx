import { styled } from '@mui/material/styles'

import { getMenuSchema } from 'entities/menu/data'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { calcTime } from 'shared/lib/get-city-time'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr } from 'shared/theme'

import { SocialMedia } from '../social-media'
import { Tags } from '../tags'
import { LFont } from '../typography'

interface Props {
  projectsCount: number
}

export const Footer = ({ projectsCount }: Props) => {
  const MENU = getMenuSchema({ projectsCount })

  const {
    isMobileS,
    isMobileLandscape,
    isMobile,
    isMobileSLandscape,
    isTablet,
    isTabletLandscape,
    isLaptop,
    isDesktop,
  } = useGetDevice()

  const showMobileSocial =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  const showSeparateEmail = isLaptop || isDesktop

  const time = calcTime(6)

  return (
    <Container>
      <TagsStyled type="wide" items={['EASY', 'CG workshop']} />
      <nav>
        <Menu>
          {MENU.map(menuItem => (
            <MenuItem>
              <MenuLink href={menuItem.path}>
                <LFont>{menuItem.title}</LFont>
              </MenuLink>
            </MenuItem>
          ))}
        </Menu>
      </nav>
      {!showMobileSocial && <SocialMediaStyled size="medium" />}
      <ContactInfo>
        <div>
          <City>Based in Almaty</City>
          <Time>{`${time.getHours()}:${
            time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
          } (GTM +6)  `}</Time>
        </div>
        <div>
          <Phone href="tel:+79222222222">+7 922 222 22 22</Phone>
          {!showSeparateEmail && (
            <Email href="mailto:easy.cg@gmail.com">easy.cg@gmail.com</Email>
          )}
        </div>
        {showSeparateEmail && (
          <div>
            <Email href="mailto:easy.cg@gmail.com">easy.cg@gmail.com</Email>
          </div>
        )}
      </ContactInfo>
      {showMobileSocial && <SocialMediaStyled size="medium" />}
      <Copyright>Copyright © 2022 . made by EASY.cg</Copyright>
    </Container>
  )
}

const Container = styled('footer')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    paddingBottom: [32, 119, 72, 122, 165, 115, 138, 213],
    paddingTop: [50, 74, 56, 140, 150, 112, 208],
  }),
  '& a': {
    textDecoration: 'none',
  },
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  alignSelf: 'center',
  fontWeight: 700,
  '& li': {
    color: theme.palette.accent,
  },
  '& div': {
    backgroundColor: theme.palette.accent,
  },
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [16, null, null, null, 88, 40],
    fontSize: [16, null, null, null, 25],
  }),
}))

const Menu = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  ...getBreakpointsStylesByArray(theme, {
    flexDirection: ['column', null, null, null, null, null, 'row'],
  }),
}))

const MenuItem = styled('li')(({ theme }) => ({
  borderBottomStyle: 'solid',
  borderBottomColor: theme.palette.text.disabled,
  textAlign: 'center',
  ...getBreakpointsStylesByArray(theme, {
    borderBottomWidth: [1, null, null, null, null, null, 0],
    paddingBottom: [8, null, null, null, null, null, 0],
    marginTop: [16, null, null, null, 24, 0],
  }),
}))

const MenuLink = styled('a')(() => ({
  color: 'inherit',
  textDecoration: 'none',
}))

const Copyright = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [10, null, null, null, null, null, 16],
  }),
}))

const ContactInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignSelf: 'center',
  ...getBreakpointsStylesByArray(theme, {
    flexDirection: ['column', null, 'row', 'column', 'row'],
    alignItems: ['center', null],
    gap: [40],
    marginTop: [47, 56, null, null, 108, null, 112],
    marginBottom: [59, 50, 54, null, 80, 90, 108],
    width: ['100%', null, null, null, '330px', null, '100%'],
  }),
}))

const SocialMediaStyled = styled(SocialMedia)(() => ({
  alignSelf: 'center',
}))

const City = styled('span')(({ theme }) => ({
  display: 'block',
  ...getBreakpointsStylesByArray(theme, {
    fontWeight: [700, null, null, null, null, null, 400],
    marginBottom: [8, null, null, null, null, null, 16],
  }),
}))

const Time = styled('span')(() => ({
  display: 'block',
}))

const Email = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    fontWeight: [700, null, null, null, null, null, 400],
  }),
}))

const Phone = styled('a')(({ theme }) => ({
  display: 'block',
  color: 'inherit',
  textAlign: 'center',
  ...getBreakpointsStylesByArray(theme, {
    fontWeight: [700, null, null, null, null, null, 400],
    marginBottom: [8, null, null, null, null, null, 16],
  }),
}))
