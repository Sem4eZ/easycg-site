import { useEffect } from 'react'

import { useGetDevice } from './use-get-device'
import { useGetScrollDirection } from './use-get-scroll-direction'

interface Props {
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const useRevealBlock = ({ ref }: Props) => {
  const scrollDirectionRef = useGetScrollDirection()

  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()

  const doAnimation = isDesktopS || isLaptop || isMacbook || isDesktop

  function revealText() {
    const block = ref.current
    if (!block) return

    block.setAttribute('scroll-direction', scrollDirectionRef.current)

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            block.style.opacity = '1'
            block.style.transition =
              'all 1s cubic-bezier(0.46, 0.03, 0.52, 0.96)'
            block.style.filter = 'blur(0)'
            block.style.transform = 'translateY(0)'
          })
        } else {
          setTimeout(() => {
            block.style.opacity = '0'
            block.style.filter = 'blur(5px)'
            if (scrollDirectionRef.current === 'scrolling down') {
              block.style.transform = 'translateY(-100%)'
            } else {
              block.style.transform = 'translateY(100%)'
            }
          })
        }
      })
    })

    observer.observe(block)
  }

  useEffect(() => {
    if (!doAnimation) return
    window.addEventListener('scroll', revealText)
    return () => {
      window.removeEventListener('scroll', revealText)
    }
  }, [doAnimation])
}
