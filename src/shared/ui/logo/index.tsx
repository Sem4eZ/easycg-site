import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'

export const Logo = () => {
  const {
    isMobileS,
    isMobileLandscape,
    isMobile,
    isMobileSLandscape,
    isTablet,
    isTabletLandscape,
  } = useGetDevice()

  const hideLogoText =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  return (
    <Container>
      <Icon />
      {!hideLogoText && <Text>EASY</Text>}
    </Container>
  )
}

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
}))

const Icon = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    width: [16, null, null, null, 24, null, 16],
    height: [16, null, null, null, 24, null, 16],
  }),
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: theme.palette.text.primary,
  backgroundColor: theme.palette.accent,
}))

const Text = styled('span')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
}))
