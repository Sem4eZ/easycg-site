import { createTheme } from '@mui/material'

import { ArrowIcon } from 'shared/icons/arrow'
import { ArrowFatIcon } from 'shared/icons/arrow-fat'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

export const maxWidth = '1920px'

export const spaceObj = {
  se: 24,
  se_horizontal: 88,
  ip13: 28,
  ip13_horizontal: 88,
  tablet: 24,
  tablet_horizontal: 88,
  desktop_s: 112,
  laptop: 112,
  macbook: 112,
  desktop: 112,
}
export const articleSpaceObj = {
  se: 24,
  se_horizontal: 88,
  ip13: 28,
  ip13_horizontal: 88,
  tablet: 24,
  tablet_horizontal: 88,
  desktop_s: 112,
  laptop: 112,
  macbook: 256,
  desktop: 256,
}
export const spaceArr = Object.values(spaceObj).map(value => value)
export const articleSpaceArr = Object.values(articleSpaceObj).map(
  value => value,
)

const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      mobile_s: 0,
      mobile_s_landscape: 0,
      mobile: 390,
      mobile_landscape: 844,
      tablet: 768,
      tablet_landscape: 942,
      desktop_s: 1200,
      laptop: 1366,
      macbook: 1728,
      desktop: 1920,
    },
  },
})

const commonTheme = createTheme({
  breakpoints: {
    values: breakpointsTheme.breakpoints.values,
    up: breakpoint => {
      if (typeof breakpoint !== 'string')
        return `@media (min-width: ${breakpoint}px)`

      let direction = 'and (orientation: portrait)'
      if (
        breakpoint.includes('landscape') ||
        breakpoint.includes('desktop_s') ||
        breakpoint.includes('laptop') ||
        breakpoint.includes('desktop')
      ) {
        direction = 'and (orientation: landscape)'
      }
      if (
        breakpoint.includes('desktop_s') ||
        breakpoint.includes('laptop') ||
        breakpoint.includes('macbook') ||
        breakpoint.includes('desktop')
      ) {
        direction = ''
      }
      return `@media (min-width: ${breakpointsTheme.breakpoints.values[breakpoint]}px) ${direction}`
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: theme => {
        return {
          body: {
            margin: 0,
            background: theme.palette.background.default,
            fontSize: pxToRem(16),
            lineHeight: pxToRem(20),
            fontWeight: 400,
            color: theme.palette.text.primary,
            '& #root': {
              overflowX: 'hidden',
              display: 'grid',
              gridTemplateRows: 'auto 1fr auto',
              gridTemplateColumns: '100%',
              minHeight: '100vh',
            },
            [theme.breakpoints.up('desktop_s')]: {
              fontSize: pxToRem(25),
              lineHeight: pxToRem(30),
            },
            '& .Mui-error': {
              color: theme.palette.error,
            },
            '&.disable-scroll': {
              overflow: 'hidden',
            },
          },
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: pxToRem(16),
          lineHeight: pxToRem(20),
          fontWeight: 400,
          [theme.breakpoints.up('desktop_s')]: {
            fontSize: pxToRem(25),
            lineHeight: pxToRem(30),
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        endIcon: <ArrowFatIcon />,
      },
      styleOverrides: {
        root: ({ theme }) => {
          return {
            fontSize: pxToRem(16),
            lineHeight: pxToRem(20),
            fontWeight: 700,
            textTransform: 'none',
            borderRadius: '999px',
            color: theme.palette.text.primary,
            padding: 0,
            ':disabled': {
              color: theme.palette.text.disabled,
            },
            '&:hover': {
              backgroundColor: 'transparent',
              '& .MuiTouchRipple-root': {
                backgroundColor: `${theme.palette.inverted}4d`,
              },
            },
            '& .MuiTouchRipple-root': {
              width: `calc(100% + ${pxToRem(48 + 32)})`,
              height: `calc(100% + ${pxToRem(24 * 2)})`,
              left: `-${pxToRem(48)}`,
              top: `-${pxToRem(24)}`,
            },
            '& .MuiTouchRipple-child': {
              backgroundColor: theme.palette.inverted,
            },
            [theme.breakpoints.up('tablet')]: {
              fontSize: pxToRem(25),
              lineHeight: pxToRem(30),
            },
            [theme.breakpoints.up('desktop_s')]: {
              fontSize: pxToRem(42),
              lineHeight: pxToRem(51),
            },
          }
        },
        endIcon: ({ theme }) => ({
          width: pxToRem(24),
          marginLeft: pxToRem(8),
          [theme.breakpoints.up('desktop_s')]: {
            width: pxToRem(48),
            marginLeft: pxToRem(24),
          },
        }),
        startIcon: ({ theme }) => ({
          width: pxToRem(24),
          marginRight: pxToRem(8),
          transform: 'rotate(180deg)',
          [theme.breakpoints.up('desktop_s')]: {
            width: pxToRem(48),
            marginRight: pxToRem(24),
          },
        }),
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: () => (
          <div className="toggleIcon">
            <ArrowIcon />
          </div>
        ),
      },
      styleOverrides: {
        select: ({ theme }) => ({
          borderBottomColor: theme.palette.accent,
          '& .CheckIcon': {
            display: 'none',
          },
          '& .explanation': {
            display: 'none',
          },
          '&~.toggleIcon': {
            transition: 'transform .2s, color .2s',
            marginRight: pxToRem(22),
            width: '15px',
            '& svg': {
              width: '100%',
            },
            [theme.breakpoints.up('desktop_s')]: {
              width: '28px',
              marginRight: pxToRem(40),
            },
          },
          '&[aria-expanded="true"]': {
            '&~.toggleIcon': {
              transform: 'rotate(180deg)',
              color: theme.palette.accent,
            },
          },
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-disabled': {
            '&:before': {
              borderBottomStyle: 'solid',
              borderBottomColor: theme.palette.text.disabled,
            },
          },
        }),
        input: ({ theme }) => ({
          caretColor: theme.palette.accent,
          fontSize: pxToRem(16),
          lineHeight: pxToRem(20),
          fontWeight: 700,
          paddingBottom: pxToRem(8),
          minHeight: 'unset',
          '&:focus': {
            backgroundColor: 'transparent',
          },
          '&:disabled': {
            color: theme.palette.text.disabled,
          },
          [theme.breakpoints.up('tablet')]: {
            fontSize: pxToRem(25),
            lineHeight: pxToRem(30),
          },
          [theme.breakpoints.up('desktop_s')]: {
            fontSize: pxToRem(42),
            lineHeight: pxToRem(51),
            paddingBottom: pxToRem(24),
          },
          [theme.breakpoints.up('desktop')]: {
            paddingTop: pxToRem(8),
            paddingBottom: pxToRem(32),
          },
        }),
        underline: ({ theme }) => ({
          '&:after': {
            borderBottomColor: theme.palette.accent,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: pxToRem(16),
          lineHeight: pxToRem(20),
          fontWeight: 700,
          transform: 'translate(0, 16px) scale(1)',
          '&.Mui-focused': {
            color: theme.palette.text.secondary,
            fontWeight: 400,
            fontSize: pxToRem(16),
            lineHeight: pxToRem(20),
          },
          [theme.breakpoints.up('tablet')]: {
            fontSize: pxToRem(25),
            lineHeight: pxToRem(30),
          },
          [theme.breakpoints.up('desktop_s')]: {
            fontSize: pxToRem(42),
            lineHeight: pxToRem(51),
            '&.Mui-focused': { fontSize: pxToRem(25), lineHeight: pxToRem(30) },
          },
        }),
        shrink: ({ theme }) => ({
          fontWeight: 400,
          fontSize: pxToRem(16),
          lineHeight: pxToRem(20),
          transform: 'translate(0, -9px) scale(0.75)',
          [theme.breakpoints.up('desktop_s')]: {
            fontSize: pxToRem(25),
            lineHeight: pxToRem(30),
          },
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          marginTop: pxToRem(16),
          '&.MuiPopover-paper': {
            backgroundColor: theme.palette.inverted,
            borderRadius: '8px',
          },
        }),
        list: ({ theme }) => ({
          paddingTop: pxToRem(8),
          paddingBottom: pxToRem(20),
          [theme.breakpoints.up('desktop_s')]: {
            paddingTop: pxToRem(16),
            paddingBottom: pxToRem(40),
          },
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 700,
          '& .CheckIcon': {
            opacity: 0,
          },
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.text.secondary,
          },
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            color: theme.palette.text.secondary,
            '& .CheckIcon': {
              opacity: 1,
            },
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.text.secondary,
            },
          },
          ...getBreakpointsStylesByArray(theme, {
            fontSize: [16, null, null, null, 25, null, 42],
            lineHeight: [20, null, null, null, 30, null, 51],
            paddingTop: [24, null, null, null, null, null, 48],
            paddingBottom: [24, null, null, null, null, null, 48],
            paddingLeft: [40, null, null, null, 88, null, 174],
            paddingRight: [40, null, null, null, 44, null, 87],
          }),
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginLeft: 0,
          marginTop: pxToRem(4),
          fontWeight: 700,
          fontSize: pxToRem(16),
          lineHeight: pxToRem(20),
          [theme.breakpoints.up('desktop_s')]: {
            marginTop: pxToRem(8),
            fontSize: pxToRem(25),
            lineHeight: pxToRem(30),
          },
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: 'transparent',
          backgroundImage: 'unset',
          boxShadow: 'unset',
          '&::before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: 0,
          overflow: 'hidden',
          '&::before': {
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '1px',
            width: '100%',
            backgroundColor: theme.palette.text.secondary,
          },
          '&::after': {
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: '100%',
            backgroundColor: theme.palette.accent,
            transform: 'translateX(-100%)',
            transition: 'transform .5s',
          },
          '&.Mui-expanded': {
            '&::after': {
              transform: 'translateX(0)',
            },
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: 0,
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          boxShadow: 'unset',
          background: theme.palette.background.default,
          padding: '64px 112px 112px 112px',
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: { root: () => ({ minHeight: '112px' }) },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: () => ({
          borderTop: 'unset',
          borderBottom: 'unset',
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
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
    card: {
      default: '#CFD6D9',
      hover: '#797F9A',
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
    card: {
      default: '#CFD6D9',
      hover: '#797F9A',
    },
  },
})
