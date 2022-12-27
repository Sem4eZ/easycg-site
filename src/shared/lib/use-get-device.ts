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
  isLaptop: boolean
  isDesktop: boolean
}

export const useGetDevice = (): Device => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

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
        isLaptop: false,
        isDesktop: false,
      }
    }

    return {
      isMobileS: width < 390 && width <= height,
      isMobileSLandscape: width < 568 && height < width,
      isMobile: width >= 390 && width < 768 && width <= height,
      isMobileLandscape: width >= 568 && width < 924 && height < width,
      isTablet: width >= 768 && width < 1366 && width <= height,
      isTabletLandscape: width >= 924 && width < 1366 && height < width,
      isLaptop: width >= 1366 && width < 1728,
      isDesktop: width >= 1728,
    }
  }, [width])
}
