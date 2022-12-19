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
      defaultProps: {
        endIcon: (
          <svg
            width="50"
            height="23"
            viewBox="0 0 50 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M49.0607 12.5607C49.6464 11.9749 49.6464 11.0251 49.0607 10.4393L39.5147 0.893398C38.9289 0.307611 37.9792 0.307611 37.3934 0.893398C36.8076 1.47919 36.8076 2.42893 37.3934 3.01472L45.8787 11.5L37.3934 19.9853C36.8076 20.5711 36.8076 21.5208 37.3934 22.1066C37.9792 22.6924 38.9289 22.6924 39.5147 22.1066L49.0607 12.5607ZM0 13H48V10H0L0 13Z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      styleOverrides: {
        root: ({ theme }) => {
          return {
            fontSize: pxToRem(16),
            fontWeight: 700,
            textTransform: 'none',
            borderRadius: '999px',
            color: theme.palette.text.primary,
            padding: `${pxToRem(24)} ${pxToRem(32)} ${pxToRem(24)} ${pxToRem(
              48,
            )}`,
            left: `-${pxToRem(48)}`,
            ':disabled': {
              color: theme.palette.text.disabled,
            },
            '&:hover': {
              backgroundColor: `${theme.palette.inverted}4d`,
            },
            ' .MuiTouchRipple-child': {
              backgroundColor: theme.palette.inverted,
            },
            [theme.breakpoints.up('tablet')]: {
              fontSize: pxToRem(25),
            },
            [theme.breakpoints.up('laptop')]: {
              fontSize: pxToRem(42),
            },
          }
        },
        endIcon: ({ theme }) => {
          return {
            width: pxToRem(24),
            marginLeft: pxToRem(8),
            [theme.breakpoints.up('laptop')]: {
              width: pxToRem(48),
              marginLeft: pxToRem(24),
            },
          }
        },
      },
    },
    MuiLink: {},
  },
})

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    text: {
      primary: '#323545',
      secondary: '#797F9A',
      disabled: '#CFD6D9',
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
      disabled: '#CFD6D9',
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
