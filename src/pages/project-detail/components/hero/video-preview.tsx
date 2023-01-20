import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { getSectionScroll } from 'shared/lib/get-section-scroll'

interface Props {
  url: string
}
export const VideoPreview = ({ url }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const doParallax = () => {
    const container = containerRef.current
    if (!container) return
    const offset =
      getSectionScroll(container, window.innerHeight / 2, false) * 100

    if (videoRef.current) {
      videoRef.current.style.transform = `translateY(-${
        offset / 6
      }%) translateX(-50%)`
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', doParallax, false)

    return () => {
      window.removeEventListener('scroll', doParallax)
    }
  }, [])

  return (
    <PreviewVideo ref={containerRef}>
      <video ref={videoRef} src={url} autoPlay loop muted></video>
    </PreviewVideo>
  )
}

const PreviewVideo = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [0, null, null, null, null, null, 247],
    height: [212, null, null, 370, 405, null, 641, null, 778],
  }),
  '& video': {
    width: '100%',
    maxWidth: 'unset',
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'transform .2s',
    transform: 'translateX(-50%)',
    ...getBreakpointsStylesByArray(theme, {
      height: ['50vh', '110vh', '50vh', '110vh', '50vh', '110vh'],
    }),
  },
}))
