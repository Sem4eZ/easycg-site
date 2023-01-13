import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr } from 'shared/theme'
import { XXLFont } from 'shared/ui/typography'

export const AboutUsPageProjectInGoodHands = () => {
  const {
    isMobileS,
    isMobileSLandscape,
    isMobile,
    isMobileLandscape,
    isDesktopS,
    isLaptop,
    isMacbook,
    isDesktop,
  } = useGetDevice()

  const doAnimate = isDesktopS || isLaptop || isMacbook || isDesktop
  const showIsInSeparate =
    isMobileS || isMobileSLandscape || isMobile || isMobileLandscape

  const iconRef = useRef<HTMLDivElement | null>(null)

  const dragSnowFlake = () => {
    const icon = iconRef.current
    if (!icon) return

    setTimeout(() => {
      icon.style.transform = `translateY(-10%)`
    }, 300)
    setTimeout(() => {
      icon.style.transform = `translateY(0%)`
    }, 500)
  }

  useEffect(() => {
    if (!doAnimate) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dragSnowFlake()
        }
      })
    })

    const icon = iconRef.current
    if (!icon) return
    observer.observe(icon)
    return () => {
      observer.unobserve(icon)
    }
  }, [doAnimate])

  return (
    <Container>
      <XXLFont gridArea="first-sentense">
        your projects {!showIsInSeparate && 'is'}
      </XXLFont>
      {showIsInSeparate && <XXLFont gridArea="second-sentense">is in</XXLFont>}
      <XXLFont gridArea="third-sentense">
        {!showIsInSeparate && 'in'} good hands
      </XXLFont>

      <Icon style={{ gridArea: 'icon' }} ref={iconRef}>
        <SnowflakeIcon />
      </Icon>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  maxWidth: maxWidth,
  width: 'fit-content',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'grid',
  boxSizing: 'content-box',
  gridTemplate: `
  'first-sentense first-sentense first-sentense' 
  'icon second-sentense second-sentense'
  `,
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    gridColumnGap: [72, 62, 42, 51, 108, 17, 33, null, 96, 216],
    gridRowGap: [12, null, 6, 16, 21, 18, 44, null, 48, 68],
    paddingTop: [62, 46, 64, 102, 0, 0, 6, null, 0],
    paddingBottom: [109, 146, 192, 199, 83, 229, 146, null, 276, 340],
    gridTemplate: [
      `
      'first-sentense first-sentense first-sentense' 
      'second-sentense second-sentense icon'
      'third-sentense third-sentense third-sentense'
      `,
      null,
      `
      'first-sentense first-sentense first-sentense' 
      'icon second-sentense second-sentense'
      'icon third-sentense third-sentense'
      `,
      null,
      `
      'first-sentense first-sentense first-sentense' 
      'icon third-sentense third-sentense'
      `,
    ],
    alignItems: ['center', null, 'start'],
  }),
}))

const Icon = styled('div')(({ theme }) => ({
  color: theme.palette.accent,
  ...getBreakpointsStylesByArray(theme, {
    height: [73, null, null, 155, 118, null, 293],
  }),
  transition: 'transform cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))
