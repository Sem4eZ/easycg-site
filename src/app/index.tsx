import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles'
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header projectsCount={projects.length} />
        <Suspense
          fallback={
            <LoaderContainer>
              <CircularProgress />
            </LoaderContainer>
          }>
          <main>
            <Pages />
          </main>
        </Suspense>
        <Footer projectsCount={projects.length} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

const LoaderContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30vh',
  '& span': {
    color: theme.palette.accent,
  },
}))
