import { useEffect, useRef } from 'react'
import { SwiperRef } from 'swiper/react'

export const useDisabelSliderOnHighDistance = () => {
  const swiperRef = useRef<SwiperRef | null>(null)

  const enableSlider = () => {
    const swiper = swiperRef.current
    if (!swiper) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top <= 30) {
          swiper.swiper.enable()
        } else {
          swiper.swiper.disable()
        }
      })
    })

    observer.observe(swiper.swiper.el)
    return () => {
      observer.unobserve(swiper.swiper.el)
    }
  }

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper) return
    enableSlider()
    window.addEventListener('scroll', enableSlider)
    return () => {
      window.removeEventListener('scroll', enableSlider)
    }
  }, [])

  return swiperRef
}
