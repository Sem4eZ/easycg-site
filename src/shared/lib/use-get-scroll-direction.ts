import { useEffect, useRef } from 'react'

export type ScrollDirection = 'scrolling down' | 'scrolling up'

export const useGetScrollDirection = () => {
  const scrollDirectionRef = useRef<ScrollDirection>('scrolling down')

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      scrollDirectionRef.current =
        scrollY > lastScrollY ? 'scrolling down' : 'scrolling up'
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollDirectionRef
}
