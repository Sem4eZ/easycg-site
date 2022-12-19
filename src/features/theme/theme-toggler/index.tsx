import { useState } from 'react'

import { darkTheme, lightTheme } from 'shared/theme'

export const useThemeToggler = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = () => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }

  return {
    toggler: (
      <div>
        {theme} <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    ),
    theme: theme === 'light' ? lightTheme : darkTheme,
  }
}
