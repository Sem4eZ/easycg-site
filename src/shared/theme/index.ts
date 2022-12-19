import { createTheme } from '@mui/material'

import { pxToRem } from 'shared/lib/px-to-rem'

const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      mobile_s: 0,
      mobile_s_landscape: 0,
      mobile: 390,
      mobile_landscape: 844,
      tablet: 768,
      tablet_landscape: 942,
      laptop: 1366,
      desktop: 1920,
    },
  },
})

const commonTheme = createTheme({
  breakpoints: {
    values: breakpointsTheme.breakpoints.values,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: theme => {
        return {
          body: {
            margin: 0,
            background: theme.palette.background.default,
            fontSize: pxToRem(16),
            fontWeight: 400,
            [theme.breakpoints.up('laptop')]: {
              fontSize: pxToRem(25),
            },
          },
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '999px',
        },
      },
    },
  },
})

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    text: {
      primary: '#323545',
      secondary: '#797F9A',
    },
    error: {
      main: '#F06976',
    },
    inverted: '#F9F9FB',
    accent: '#AFD624',
    background: {
      default: 'linear-gradient(247.32deg, #FAFAFF 0%, #ECECEC 100%)',
    },
  },
})

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark',
    text: {
      primary: '#F9F9FB',
      secondary: '#CFD6D9',
    },
    error: {
      main: '#F06976',
    },
    inverted: '#323545',
    accent: '#6456DD',
    background: {
      default: 'linear-gradient(247.32deg, #20222E 0%, #1E1C1B 100%)',
    },
  },
})
