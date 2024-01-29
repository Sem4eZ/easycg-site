import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetTime } from 'shared/lib/use-get-time'

export const ThemeAndLocation = ({ ...rest }) => {
  const { time } = useGetTime(8)
  const { toggler } = useTheme()

  return (
    <Container {...rest}>
      {toggler} <Divider>/</Divider> based in Indonesia
      <br />
      {`${time.getHours()}:${
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
      } (GTM +8)  `}
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
