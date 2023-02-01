import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

interface Props extends ButtonProps {
  children: string
  active?: boolean
}
export const FilterTag = ({ children, active = false, ...rest }: Props) => {
  return (
    <Container endIcon="" active={active ? 1 : 0} {...rest}>
      {children}
    </Container>
  )
}

const Container = styled(Button)<{ active: 0 | 1 }>(({ theme, active }) => ({
  display: 'inline-flex',
  fontWeight: 700,
  border: `2px solid ${theme.palette.text.primary}`,
  backgroundColor: active ? theme.palette.text.primary : 'transparent',
  color: active ? theme.palette.inverted : theme.palette.text.primary,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, 25, null, null, 42],
    lineHeight: [19, null, 30, null, null, 51],
    paddingTop: [10, null, null, null, null, 18],
    paddingBottom: [10, null, null, null, null, 18],
    paddingLeft: [24, null, null, null, null, 48],
    paddingRight: [24, null, null, null, null, 48],
    marginRight: [8, null, null, null, null, null, 16],
    marginBottom: [16, null, 24, null, null, null, 32],
  }),
  '&:hover': {
    border: `4px solid ${theme.palette.text.primary}`,
    backgroundColor: active ? theme.palette.text.primary : 'transparent',
    color: active ? theme.palette.inverted : theme.palette.text.primary,
    ...getBreakpointsStylesByArray(theme, {
      paddingTop: [8, null, null, null, null, 16],
      paddingBottom: [8, null, null, null, null, 16],
      paddingLeft: [22, null, null, null, null, 46],
      paddingRight: [22, null, null, null, null, 46],
    }),
  },
  '& .MuiTouchRipple-root': {
    width: active ? 'calc(100% + 8px)' : 'calc(100% + 2px)',
    height: active ? 'calc(100% + 8px)' : 'calc(100% + 2px)',
    left: active ? -4 : -1,
    top: active ? -4 : -1,
  },
}))
