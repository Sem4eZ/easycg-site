import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import Pages from 'pages'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useThemeToggler } from 'features/theme/theme-toggler'

import { Header } from 'shared/ui/header'

function App() {
  const { theme, toggler: themeToggler } = useThemeToggler()
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {themeToggler}
          <Header />
          <Pages />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
