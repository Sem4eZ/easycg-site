import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import { MoonIcon } from 'shared/icons/moon'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { darkTheme, lightTheme } from 'shared/theme'

export const useThemeToggler = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }

  const toggler = (
    <Button onClick={toggleTheme}>
      <MoonIcon />
    </Button>
  )

  return {
    theme:
      theme === 'light'
        ? { ...lightTheme, toggler }
        : { ...darkTheme, toggler },
  }
}

const Button = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '& svg': {
    width: '100%',
    height: 'auto',
  },
  ...getBreakpointsStylesByArray(theme, {
    width: [40, null, null, null, 48, null, null, null, 56],
  }),
}))
