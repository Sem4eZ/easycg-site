import {
  Box,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Pages from 'pages'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { useThemeToggler } from 'features/theme/theme-toggler'

import ScrollToTop from 'shared/lib/scroll-to-top'

function App() {
  const { theme } = useThemeToggler()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Suspense
          fallback={
            <LoaderContainer>
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            </LoaderContainer>
          }>
          <Pages />
        </Suspense>
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
