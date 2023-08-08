import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { getSectionScroll } from 'shared/lib/get-section-scroll'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth } from 'shared/theme'

const PATH_TO_PARALLAX = '/assets/images/mainpage-parallax'

const getBallAccentPath = (theme: 'dark' | 'light') => {
  return `${PATH_TO_PARALLAX}/Ball accent ${theme}.png`
}

const getMobileMainImage = (theme: 'dark' | 'light') => {
  return (name: string) =>
    `url("${PATH_TO_PARALLAX}/Main ${theme} ${name}.jpg")`
}

const PATH_TO_CLOUD = `${PATH_TO_PARALLAX}/Cloud.png`
const CLOUDS_INITIAL_TRANSFORM = {
  3: 'scaleX(-1)',
}
const BALOONS_INITIAL_TRANSFORM = {
  1: 'rotate(19deg)',
  2: 'rotate(-15deg)',
  3: 'rotate(18deg)',
  4: 'rotate(15deg)',
  5: 'rotate(2deg)',
  6: 'rotate(13deg)',
  7: 'rotate(18deg)',
}
export const ParallaxFullWidth = () => {
  const theme = useTheme()
  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()
  const doDesktopAnimation = isDesktopS || isLaptop || isMacbook || isDesktop
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cloud1Ref = useRef<HTMLImageElement | null>(null)
  const cloud2Ref = useRef<HTMLImageElement | null>(null)
  const cloud3Ref = useRef<HTMLImageElement | null>(null)
  const cloud4Ref = useRef<HTMLImageElement | null>(null)

  const baloon1Ref = useRef<HTMLImageElement | null>(null)
  const baloon2Ref = useRef<HTMLImageElement | null>(null)
  const baloon3Ref = useRef<HTMLImageElement | null>(null)
  const baloon4Ref = useRef<HTMLImageElement | null>(null)
  const baloon5Ref = useRef<HTMLImageElement | null>(null)
  const baloon6Ref = useRef<HTMLImageElement | null>(null)
  const baloon7Ref = useRef<HTMLImageElement | null>(null)

  const ellipseRef = useRef<HTMLDivElement | null>(null)

  const mainRef = useRef<HTMLImageElement | null>(null)
  const mainMobileRef = useRef<HTMLImageElement | null>(null)

  const doParallax = () => {
    const container = containerRef.current
    if (!container) return
    const offset = getSectionScroll(container, window.innerHeight / 2) * 100

    if (cloud1Ref.current) {
      cloud1Ref.current.style.transform = `translateY(-${offset}%)`
    }
    if (cloud2Ref.current) {
      cloud2Ref.current.style.transform = `translateY(-${offset}%)`
    }
    if (cloud3Ref.current) {
      cloud3Ref.current.style.transform = `translateY(-${offset}%) ${CLOUDS_INITIAL_TRANSFORM[3]}`
    }
    if (cloud4Ref.current) {
      cloud4Ref.current.style.transform = `translateY(-${offset}%)`
    }

    if (baloon1Ref.current) {
      baloon1Ref.current.style.transform = `translateY(-${offset}%) ${BALOONS_INITIAL_TRANSFORM[1]}`
    }
    if (baloon2Ref.current) {
      baloon2Ref.current.style.transform = `translateY(-${offset}%) ${BALOONS_INITIAL_TRANSFORM[2]}`
    }
    if (baloon3Ref.current) {
      baloon3Ref.current.style.transform = `translateY(-${offset * 5}%) ${
        BALOONS_INITIAL_TRANSFORM[3]
      }`
    }
    if (baloon4Ref.current) {
      baloon4Ref.current.style.transform = `translateY(-${offset}%) ${BALOONS_INITIAL_TRANSFORM[4]}`
    }
    if (baloon5Ref.current) {
      baloon5Ref.current.style.transform = `translateY(-${offset}%) ${BALOONS_INITIAL_TRANSFORM[5]}`
    }
    if (baloon6Ref.current) {
      baloon6Ref.current.style.transform = `translateY(-${offset}%) ${BALOONS_INITIAL_TRANSFORM[6]}`
    }
    if (baloon7Ref.current) {
      baloon7Ref.current.style.transform = `translateY(-${offset}%) ${BALOONS_INITIAL_TRANSFORM[7]}`
    }

    if (ellipseRef.current) {
      ellipseRef.current.style.transform = `translateY(-${offset}%)`
    }

    if (mainRef.current) {
      mainRef.current.style.transform = `translateY(-${offset / 6}%)`
    }
  }

  const doMobileParallax = () => {
    const container = containerRef.current
    if (!container) return
    const offset =
      getSectionScroll(container, window.innerHeight / 2, false) * 100
    if (mainMobileRef.current) {
      mainMobileRef.current.style.transform = `translateY(-${offset / 6}%)`
    }
  }

  useEffect(() => {
    if (doDesktopAnimation) {
      window.addEventListener('scroll', doParallax, false)
    }

    return () => {
      window.removeEventListener('scroll', doParallax)
    }
  }, [doDesktopAnimation])

  useEffect(() => {
    if (!doDesktopAnimation) {
      window.addEventListener('scroll', doMobileParallax, false)

      return () => {
        window.removeEventListener('scroll', doMobileParallax)
      }
    }
  }, [doDesktopAnimation])

  return (
    <Container ref={containerRef}>
      {doDesktopAnimation ? (
        <ImagesContainer>
          <Baloon1
            ref={baloon1Ref}
            src={getBallAccentPath(theme.palette.mode)}
          />
          <Cloud1 ref={cloud1Ref} src={PATH_TO_CLOUD} />

          <Baloon2
            ref={baloon2Ref}
            src={getBallAccentPath(theme.palette.mode)}
          />
          <Cloud2 ref={cloud2Ref} src={PATH_TO_CLOUD} />

          <Cloud3 ref={cloud3Ref} src={PATH_TO_CLOUD} />
          <Baloon3
            ref={baloon3Ref}
            src={getBallAccentPath(theme.palette.mode)}
          />

          <Cloud4 ref={cloud4Ref} src={PATH_TO_CLOUD} />

          <CircleContainer>
            <CircleShadow />
            <Circle />
          </CircleContainer>

          <Ellipse ref={ellipseRef} />

          <Baloon5
            ref={baloon5Ref}
            src={getBallAccentPath(theme.palette.mode)}
          />

          <Baloon6
            ref={baloon6Ref}
            src={getBallAccentPath(theme.palette.mode)}
          />

          <Main ref={mainRef} src={`${PATH_TO_PARALLAX}/Main.png`} />

          <Baloon4
            ref={baloon4Ref}
            src={getBallAccentPath(theme.palette.mode)}
          />

          <Baloon7
            ref={baloon7Ref}
            src={getBallAccentPath(theme.palette.mode)}
          />
        </ImagesContainer>
      ) : (
        <MainMobile ref={mainMobileRef} />
      )}
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'dark' ? '#323545' : '#ced6d9',
  ...getBreakpointsStylesByArray(theme, {
    height: [214, 266, 260, 391, 389, null, 652, null, 825, 925],
    marginTop: [118, 30, 51, 154, 231, 125, 266, null, 185, 190],
    marginBottom: [118, 30, 51, 154, 231, 125, 266, null, 185, 190],
  }),
}))

const ImagesContainer = styled('div')(() => ({
  position: 'relative',
  height: '100%',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
}))

const Main = styled('img')(() => ({
  width: '100%',
  position: 'relative',
}))

const MainMobile = styled('div')(({ theme }) => {
  const getImage = getMobileMainImage(theme.palette.mode)
  return {
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    ...getBreakpointsStylesByArray(theme, {
      backgroundImage: [
        getImage('mobile vertical'),
        getImage('mobile horizontal'),
        getImage('mobile vertical'),
        getImage('mobile horizontal'),
      ],
    }),
  }
})

const Ellipse = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '8%',
  bottom: '3%',
  width: 295,
  height: 67,
  background: theme.palette.accent,
  boxShadow: `0px 15.9615px 39.9036px rgba(56, 64, 12, 0.2)`,
  borderRadius: '50%',
  ...getBreakpointsStylesByArray(theme, {
    width: [233, null, null, null, null, null, null, null, 295, 330],
    height: [53, null, null, null, null, null, null, null, 67, 75],
  }),
}))

const CircleContainer = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Circle = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  border: `solid ${theme.palette.accent}`,
  filter: `drop-shadow(0px 17.1652px 42.913px rgba(56, 64, 12, 0.2))`,
  ...getBreakpointsStylesByArray(theme, {
    width: [420, null, null, null, null, null, null, null, 532, 594],
    height: [420, null, null, null, null, null, null, null, 532, 594],
    borderWidth: [63, null, null, null, null, null, null, null, 80, 90],
  }),
}))

const CircleShadow = styled('div')(({ theme }) => ({
  borderRadius: '50%',
  opacity: 0.6,
  border: `solid ${theme.palette.accent}`,
  filter: `blur(16.8129px) drop-shadow(0px 18.5484px 46.371px rgba(56, 64, 12, 0.2))`,
  ...getBreakpointsStylesByArray(theme, {
    width: [454, null, null, null, null, null, null, null, 575, 642],
    height: [454, null, null, null, null, null, null, null, 575, 642],
    borderWidth: [68, null, null, null, null, null, null, null, 87, 97],
  }),
}))

const Cloud1 = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: '13%',
  top: '11%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 199],
  }),
}))

const Cloud2 = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: '45%',
  top: '2%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 219],
  }),
}))

const Cloud3 = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: '6%',
  top: '15%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 229],
  }),
  transform: CLOUDS_INITIAL_TRANSFORM[3],
}))

const Cloud4 = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: '36%',
  bottom: '22%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 317],
  }),
}))

const Baloon1 = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: '16.5%',
  top: '4%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 103],
  }),
  transform: BALOONS_INITIAL_TRANSFORM[1],
}))

const Baloon2 = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  top: '3%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 71],
  }),
  transform: BALOONS_INITIAL_TRANSFORM[2],
}))

const Baloon3 = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: '16.5%',
  top: '20%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 71],
  }),
  transform: BALOONS_INITIAL_TRANSFORM[3],
}))

const Baloon4 = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: '2%',
  bottom: '22%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 101],
  }),
  transform: BALOONS_INITIAL_TRANSFORM[4],
}))

const Baloon5 = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: '34%',
  bottom: '6%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 158],
  }),
  transform: BALOONS_INITIAL_TRANSFORM[5],
}))

const Baloon6 = styled('img')(({ theme }) => ({
  position: 'absolute',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 230],
    left: ['22%', null, null, null, null, null, null, '23%', '24%', '25%'],
    bottom: [
      '-21%',
      null,
      null,
      null,
      null,
      null,
      null,
      '-19%',
      '-11%',
      '-11%',
    ],
  }),
  transform: BALOONS_INITIAL_TRANSFORM[6],
}))

const Baloon7 = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: '1%',
  top: '27%',
  ...getBreakpointsStylesByArray(theme, {
    height: [65, null, 79, null, 92],
  }),
  transform: BALOONS_INITIAL_TRANSFORM[7],
}))
