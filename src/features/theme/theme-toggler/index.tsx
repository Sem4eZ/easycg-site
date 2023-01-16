import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { MoonIcon } from 'shared/icons/moon'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetUserTime } from 'shared/lib/use-get-time'
import { darkTheme, lightTheme } from 'shared/theme'

type ThemeType = 'light' | 'dark'

const THEME_COOKIE_KEY = 'theme'
export const useThemeToggler = () => {
  const [theme, setTheme] = useState<ThemeType>(
    Cookies.get(THEME_COOKIE_KEY)
      ? (Cookies.get(THEME_COOKIE_KEY) as ThemeType)
      : 'light',
  )

  const toggleTheme = () => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }

  const { time } = useGetUserTime()

  useEffect(() => {
    Cookies.set(THEME_COOKIE_KEY, theme, { expires: 1 })
  }, [theme])

  useEffect(() => {
    const hours = time.getHours()
    if (window.matchMedia) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
          setTheme(event.matches ? 'dark' : 'light')
        })
    } else {
      if (hours > 20 && hours < 8) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
  }, [time])

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
