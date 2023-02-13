import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

const IMAGES = {
  light: '/assets/images/Scroll down light.png',
  dark: '/assets/images/Scroll down dark.png',
}

export const ScrollDown = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const theme = useTheme()

  const rotate = () => {
    const section = sectionRef.current
    if (!section) return

    const rotate =
      window.scrollY < 280
        ? 'rotate(0deg)'
        : 'rotate(' + (window.scrollY - 350) / 4 + 'deg)'

    section.style.transform = rotate
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', rotate)
        } else {
          window.removeEventListener('scroll', rotate)
        }
      })
    })

    const section = sectionRef.current
    section && observer.observe(section)
  }, [])

  return (
    <Container ref={sectionRef}>
      <img src={IMAGES[theme.palette.mode]} alt="" />
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  boxSizing: 'content-box',
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    width: [64, null, null, null, 96, null, 112, null, 226],
    height: [64, null, null, null, 96, null, 112, null, 226],
    marginTop: [92, 85, 100, 94, 128, 188, 157, null, 74, 165],
    marginBottom: [41, 10, 6, 55, 25, 152, 154, null, 187, 172],
  }),
  transition: 'transform .2s',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}))
