import { useTheme } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

export const useGetIsTouchableVersion = () => {
  const [width, setWidth] = useState(0)
  const { breakpoints } = useTheme()

  const handleResize = useCallback(() => {
    setWidth(document.documentElement.clientWidth)
  }, [])

  useEffect(() => {
    handleResize()
  }, [handleResize])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return width < breakpoints.values.desktop_s
}
