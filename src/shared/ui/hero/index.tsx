import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr } from 'shared/theme'

import { SocialMedia } from '../social-media'
import { Decoration } from './ui/decoration'
import { ScrollDown } from './ui/scroll-down'
import { ThemeAndLocation } from './ui/theme-and-location'

interface Props {
  menu: React.ReactNode
}

export const Hero = ({ menu }: Props) => {
  const {
    isMobileS,
    isMobileSLandscape,
    isMobile,
    isMobileLandscape,
    isTablet,
    isTabletLandscape,
  } = useGetDevice()

  const showMenu =
    !isMobileS &&
    !isMobileSLandscape &&
    !isMobile &&
    !isMobileLandscape &&
    !isTablet &&
    !isTabletLandscape

  const showThemeAndLocationInContentBlock =
    isMobileS ||
    isMobileSLandscape ||
    isMobile ||
    isMobileLandscape ||
    isTablet ||
    isTabletLandscape

  return (
    <>
      <Container>
        <Decoration />
        <Content>
          <ContentMain>
            <Title>
              {'EASY'.split('').map((letter, i) => (
                <span key={i}>{letter}</span>
              ))}
            </Title>
            {showMenu && menu}
            {showThemeAndLocationInContentBlock && <ThemeAndLocationStyled />}
          </ContentMain>
          <ContentFooter>
            <SocialMedia size="small" />
            {!showThemeAndLocationInContentBlock && <ThemeAndLocationStyled />}
          </ContentFooter>
        </Content>
      </Container>
      <ScrollDown />
    </>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    height: [
      'calc(100vh - 150px)',
      'calc(100vh - 130px)',
      'calc(100vh - 144px)',
      'calc(100vh - 130px)',
      'calc(100vh - 119px)',
      'calc(100vh - 103px)',
      'calc(100vh - 176px)',
    ],
  }),
}))

const Content = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: '100%',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
  gridTemplateRows: '1fr auto',
}))

const ContentMain = styled('div')(() => ({
  display: 'grid',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateRows: '1fr 1fr',
}))

const ContentFooter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const Title = styled('div')(({ theme }) => ({
  display: 'flex',
  fontSize: 177,
  lineHeight: '216px',
  fontWeight: 800,
  gap: 80,
  justifyContent: 'space-between',
  alignSelf: 'flex-end',
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [68, null, 110, null, null, null, null, null, 177],
    lineHeight: [83, null, 134, null, null, null, null, null, 216],
    marginBottom: [16, 0, 83, 46, 32, null, 24, null, null],
    gap: [16, null, null, null, null, null, 56, null, 80],
    width: ['auto', null, null, null, null, null, 468, null, 'auto'],
  }),
}))

const ThemeAndLocationStyled = styled(ThemeAndLocation)(() => ({
  alignSelf: 'flex-start',
}))
