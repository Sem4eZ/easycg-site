import '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile_s: true
    mobile_s_landscape: true
    mobile: true
    mobile_landscape: true
    tablet: true
    tablet_landscape: true
    laptop: true
    desktop: true
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    inverted: string
    accent: string
    card: {
      default: string
      hover: string
    }
  }
  interface PaletteOptions {
    inverted: string
    accent: string
    card: {
      default: string
      hover: string
    }
  }
}
