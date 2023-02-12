import { styled } from '@mui/material/styles'

import { getMenuSchema } from 'entities/menu/data'

import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from 'shared/config/environment-variables'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { getPhoneWithoutFormatting } from 'shared/lib/get-phone-without-formatting'
import { useGetDevice } from 'shared/lib/use-get-device'
import { useGetTime } from 'shared/lib/use-get-time'
import { maxWidth, spaceArr } from 'shared/theme'

import { Link } from '../link'
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

  const { time } = useGetTime(8)

  return (
    <Container>
      <TagsStyled
        type="wide"
        items={['EASY', 'CG workshop']}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <nav>
        <Menu>
          {MENU.map(menuItem => (
            <MenuItem key={menuItem.title}>
              <MenuLink to={menuItem.path}>
                <LFont>{menuItem.title}</LFont>
              </MenuLink>
            </MenuItem>
          ))}
        </Menu>
      </nav>
      {!showMobileSocial && <SocialMediaStyled size="medium" />}
      <ContactInfo>
        <BlockWithCity>
          <City>Based in Indonesia</City>
          <Time>{`${time.getHours()}:${
            time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
          } (GTM +8)`}</Time>
        </BlockWithCity>
        <BlockWithPhone>
          <Phone href={`tel:${getPhoneWithoutFormatting(COMPANY_PHONE)}`}>
            {COMPANY_PHONE}
          </Phone>
          {!showSeparateEmail && (
            <Email href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</Email>
          )}
        </BlockWithPhone>
        {showSeparateEmail && (
          <BlockWithEmail>
            <Email href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</Email>
          </BlockWithEmail>
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
  width: '100%',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    paddingBottom: [32, 140, 72, 112],
    paddingTop: [50, 74, 56, 140, 150, 112, 165, null, 208, 176],
  }),
  '& a': {
    textDecoration: 'none',
  },
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  alignSelf: 'center',
  fontWeight: 700,
  cursor: 'pointer',
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

const MenuLink = styled(Link)(() => ({
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
    alignItems: ['center', null, null, null, null, null, 'flex-start'],
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

const Time = styled('span')(({ theme }) => ({
  display: 'block',
  color: theme.palette.text.secondary,
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

const InfoBlock = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    width: ['auto', null, null, null, null, null, 270],
  }),
}))
const BlockWithCity = styled(InfoBlock)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    order: [1, 1, 0, 1, 0],
  }),
}))
const BlockWithPhone = styled(InfoBlock)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    order: [0, 0, 1, 0, 1],
  }),
}))
const BlockWithEmail = styled(InfoBlock)(() => ({
  order: 2,
  display: 'flex',
  justifyContent: 'flex-end',
}))
