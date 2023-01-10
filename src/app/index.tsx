import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import Pages from 'pages'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useThemeToggler } from 'features/theme/theme-toggler'

import { projects } from 'entities/project/data'

import { Footer } from 'shared/ui/footer'
import { Header } from 'shared/ui/header'

function App() {
  const { theme } = useThemeToggler()

  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header projectsCount={projects.length} />
          <main>
            <Pages />
          </main>
          <Footer projectsCount={projects.length} />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
