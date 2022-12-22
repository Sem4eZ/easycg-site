import { useCallback, useEffect, useState } from 'react'

export const useGetIsTouchableVersion = () => {
  const [width, setWidth] = useState(0)

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

  return width < 1366
}
