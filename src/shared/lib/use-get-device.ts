import { useTheme } from '@mui/material'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

export interface Device {
  isMobileS: boolean
  isMobileSLandscape: boolean
  isMobile: boolean
  isMobileLandscape: boolean
  isTablet: boolean
  isTabletLandscape: boolean
  isDesktopS: boolean
  isLaptop: boolean
  isMacbook: boolean
  isDesktop: boolean
}

export const useGetDevice = (): Device => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const theme = useTheme()
  const breakpoints = theme.breakpoints.values

  const handleResize = useCallback(() => {
    setWidth(document.documentElement.clientWidth)
    setHeight(document.documentElement.clientHeight)
  }, [])

  useLayoutEffect(() => {
    handleResize()
  }, [handleResize])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return useMemo(() => {
    if (width === 0) {
      return {
        isMobileS: false,
        isMobileSLandscape: false,
        isMobile: false,
        isMobileLandscape: false,
        isTablet: false,
        isTabletLandscape: false,
        isDesktopS: false,
        isLaptop: false,
        isMacbook: false,
        isDesktop: false,
      }
    }

    return {
      isMobileS: width < breakpoints.mobile && width <= height,
      isMobileSLandscape: width < 568 && height < width,
      isMobile:
        width >= breakpoints.mobile &&
        width < breakpoints.tablet &&
        width <= height,
      isMobileLandscape:
        width >= 568 && width < breakpoints.tablet_landscape && height < width,
      isTablet:
        width >= breakpoints.tablet &&
        width < breakpoints.desktop_s &&
        width <= height,
      isTabletLandscape:
        width >= breakpoints.tablet_landscape &&
        width < breakpoints.desktop_s &&
        height < width,
      isDesktopS: width >= breakpoints.desktop_s && width < breakpoints.laptop,
      isLaptop: width >= breakpoints.laptop && width < breakpoints.macbook,
      isMacbook: width >= breakpoints.macbook && width < breakpoints.desktop,
      isDesktop: width >= breakpoints.desktop,
    }
  }, [width])
}
