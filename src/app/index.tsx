import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import Pages from 'pages'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useThemeToggler } from 'features/theme/theme-toggler'

import { projects } from 'entities/project/data'

import { Footer } from 'shared/ui/footer'
import { Header } from 'shared/ui/header'

function App() {
  const { theme, toggler: themeToggler } = useThemeToggler()
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {themeToggler}
          <Header projectsCount={projects.length} />
          <Pages />
          <Footer projectsCount={projects.length} />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
