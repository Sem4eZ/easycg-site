import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr, spaceObj } from 'shared/theme'

interface Props {
  children: React.ReactNode
  parallax?: boolean
}

const SCROLL_OFFSET = {
  parallax: 200,
  default: 400,
}

export const PARALLAX_CLASS = 'parallax'

const canScrollRight = (
  container: HTMLUListElement,
  scrollPosition: number,
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>,
) => {
  const isEnd =
    scrollPosition === container.scrollLeft && container.scrollLeft !== 0
  setScrollPosition(container.scrollLeft)

  return !isEnd
}

const canScrollLeft = (
  container: HTMLUListElement,
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>,
) => {
  const isStart = container.scrollLeft === 0
  setScrollPosition(container.scrollLeft)

  return !isStart
}

const doParallaxListItemImage = (container: HTMLUListElement) => {
  const cards = Array.from(
    container.getElementsByClassName(
      PARALLAX_CLASS,
    ) as HTMLCollectionOf<HTMLElement>,
  )

  for (let i = 0; i < cards.length; i++) {
    setTimeout(() => {
      const persentage = (container.scrollLeft * 100) / container.clientWidth

      const element = cards[i]
      element.style.transition = 'transform 1s'
      element.style.transform = `translate(-${
        persentage < 45 ? persentage : 45
      }%,0)`
    })
  }
}

export const ScrollableList = ({ children, parallax }: Props) => {
  const { breakpoints } = useTheme()
  const scrollRightExceptionCount = useRef(0)
  const scrollOffset = parallax ? SCROLL_OFFSET.parallax : SCROLL_OFFSET.default
  const containerRef = useRef<HTMLUListElement | null>(null)
  const body = document.querySelector('body')
  const [scrollPosition, setScrollPosition] = useState(
    containerRef.current?.scrollLeft ?? 0,
  )
  const scrollingRef = useRef(false)

  const mouseMove = (e: MouseEvent) => {
    const container = containerRef.current
    if (!container) return

    const distanceFromTopOfTheView = container.getBoundingClientRect().top
    const containerEnding = distanceFromTopOfTheView + container.offsetHeight

    if (e.clientY < distanceFromTopOfTheView || e.clientY > containerEnding) {
      enableBodyScroll()
    }
  }

  const enableBodyScroll = () => {
    if (!body) return
    scrollingRef.current = false
    body.classList.remove('disable-scroll')
  }

  const scroll = (e: WheelEvent) => {
    const container = containerRef.current
    if (!container || !body) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const distanceFromTopOfTheView = container.getBoundingClientRect().top
          const persentage = Math.round(
            ((window.innerHeight - distanceFromTopOfTheView) * 100) /
              container.offsetHeight,
          )

          if (persentage < 50 || persentage > 130) {
            enableBodyScroll()

            return
          }

          e.preventDefault()

          body.classList.add('disable-scroll')
          if (!scrollingRef.current) {
            container.scrollIntoView({
              behavior: 'smooth',
            })
          }
          scrollingRef.current = true

          if (e.deltaY > 0) {
            if (canScrollRight(container, scrollPosition, setScrollPosition)) {
              container.scroll({
                top: 0,
                left: container.scrollLeft + scrollOffset,
                behavior: 'smooth',
              })
              scrollRightExceptionCount.current = 0
              parallax && doParallaxListItemImage(container)
            } else {
              if (scrollRightExceptionCount.current >= 2) {
                enableBodyScroll()
                return
              }
              scrollRightExceptionCount.current += 1
            }
          } else {
            if (canScrollLeft(container, setScrollPosition)) {
              container.scroll({
                top: 0,
                left: container.scrollLeft - scrollOffset,
                behavior: 'smooth',
              })
              parallax && doParallaxListItemImage(container)
            } else {
              enableBodyScroll()
            }
          }
        }
      })
    })

    observer.observe(container)
  }

  useEffect(() => {
    if (window.innerWidth < breakpoints.values.desktop_s) return
    containerRef.current?.addEventListener('wheel', scroll)
    window.addEventListener('mousemove', mouseMove)
    return () => {
      containerRef.current?.removeEventListener('wheel', scroll)
      window.removeEventListener('mousemove', mouseMove)
    }
  })

  return <Container ref={containerRef}>{children}</Container>
}

const Container = styled('ul')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: '40px',
  overflowX: 'scroll',
  padding: 0,
  ...getBreakpointsStylesByArray(theme, {
    gap: [16, 48, 16, 126, 48, null, 106],
    paddingLeft: spaceArr,
    paddingRight: [0, spaceObj.se_horizontal, 0, spaceObj.ip13_horizontal, 0],
    flexWrap: ['nowrap', 'wrap', 'nowrap', 'wrap', 'nowrap'],
  }),
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}))
