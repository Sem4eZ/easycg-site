import { styled } from '@mui/material/styles'

import { getMenuSchema } from 'entities/menu/data'

import { COMPANY_EMAIL } from 'shared/config/environment-variables'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { useGetUserTime } from 'shared/lib/use-get-time'
import { useGetUserCity } from 'shared/lib/use-get-user-city'
import { maxWidth, spaceArr } from 'shared/theme'

import { SocialMedia } from '../social-media'
import { Tags } from '../tags'
import { LFont } from '../typography'

interface Props {
  projectsCount: number
}

export const Footer = ({ projectsCount }: Props) => {
  const MENU = getMenuSchema({ projectsCount })

  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()

  const showMobileSocial = !isDesktopS && !isLaptop && !isMacbook && !isDesktop

  const showSeparateEmail = isDesktopS || isLaptop || isMacbook || isDesktop

  const { time, timezone } = useGetUserTime()
  const { city } = useGetUserCity()

  return (
    <Container>
      <TagsStyled type="wide" items={['EASY', 'CG workshop']} />
      <nav>
        <Menu>
          {MENU.map(menuItem => (
            <MenuItem key={menuItem.title}>
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
          <City>Based in {city}</City>
          <Time>{`${time.getHours()}:${
            time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
          } (GTM ${timezone})`}</Time>
        </div>
        <div>
          <Phone href="tel:+79222222222">+7 922 222 22 22</Phone>
          {!showSeparateEmail && (
            <Email href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</Email>
          )}
        </div>
        {showSeparateEmail && (
          <div>
            <Email href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</Email>
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
    paddingBottom: [32, 140, 72, 112, 165, 138, null, 213, 64],
    paddingTop: [50, 74, 56, 140, 150, 112, 165, null, 208, 176],
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
    marginBottom: [16, null, null, 32, 88, null, 48],
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
    marginTop: [16, null, null, null, 24, null, 0],
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
