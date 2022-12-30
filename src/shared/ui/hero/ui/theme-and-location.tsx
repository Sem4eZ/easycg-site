import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetUserTime } from 'shared/lib/use-get-time'
import { useGetUserCity } from 'shared/lib/use-get-user-city'

export const ThemeAndLocation = ({ ...rest }) => {
  const { city } = useGetUserCity()
  const { time, timezone } = useGetUserTime()
  const { toggler } = useTheme()

  return (
    <Container {...rest}>
      {toggler} <Divider>/</Divider> Based in {city} <br />
      {`${time.getHours()}:${
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
      } (GTM ${timezone})  `}
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [10, null, null, null, 16],
    lineHeight: [12, null, null, null, 19],
    fontWeight: [400, null, null, null, null, null, 700, null],
  }),
}))

const Divider = styled('span')(({ theme }) => ({
  display: 'inline-block',
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, null, null, null, null, 42],
    lineHeight: [19, null, null, null, null, null, 51],
    marginLeft: [0, null, null, null, null, null, null, null, 8],
    marginRight: [8, null, null, null, 10, null, null, 8, null, 28],
  }),
}))
