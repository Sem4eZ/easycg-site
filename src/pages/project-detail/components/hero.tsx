import { Button } from '@mui/material'
import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { Project } from 'entities/project/types'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'
import { visuallyHiddenStyles } from 'shared/ui/accesibility'

interface Props {
  image: string
  link: Project['link']
}

export const ProjectDetailHero = ({ image, link }: Props) => {
  const theme = useTheme()
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLAnchorElement | null>(null)
  const { isDesktopS, isDesktop, isLaptop, isMacbook } = useGetDevice()

  const doParallax = isDesktopS || isDesktop || isLaptop || isMacbook

  const parallax = (e: MouseEvent) => {
    const parallaxEl = parallaxRef.current
    if (!parallaxEl) return

    const cvalueX = (e.pageX * -1) / 20
    const cvalueY = (e.pageY * -1) / 20

    parallaxEl.style.transform =
      'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)'
  }

  useEffect(() => {
    if (!doParallax) return

    window.addEventListener('mousemove', parallax)
    return () => {
      window.removeEventListener('mousemove', parallax)
    }
  }, [doParallax])

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const addAnimtaion = () => {
      button.classList.add('animate')
    }

    const removeAnimation = () => {
      button.classList.remove('animate')
    }

    button.addEventListener('mouseover', addAnimtaion)
    button.addEventListener('mouseleave', removeAnimation)
    return () => {
      button.removeEventListener('mouseover', addAnimtaion)
      button.removeEventListener('mouseleave', removeAnimation)
    }
  }, [])

  return (
    <Container>
      <Image ref={parallaxRef} style={{ backgroundImage: `url(${image})` }} />

      {isDesktopS || isDesktop || isLaptop || isMacbook ? (
        <LinkButtonDesktop ref={buttonRef} href={link.url}>
          <LinkButtonDesktopAccessibility>
            {getButtonByLinkType(link).desktop}
          </LinkButtonDesktopAccessibility>
          <img
            src={`/assets/images/${getButtonByLinkType(link).desktop} ${
              theme.palette.mode
            }.png`}
          />
        </LinkButtonDesktop>
      ) : (
        <LinkButtonMobile href={link.url}>
          {getButtonByLinkType(link).mobile}
        </LinkButtonMobile>
      )}

      <Remark>
        *Before we start, you should know one thing. Content that we made can be
        different from owner’s content. We gave an ideas, clients develop it
        themselves
      </Remark>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingRight: spaceArr,
    paddingLeft: spaceArr,
    paddingBottom: [8, 33, 49, 41, 144, 74, 49, null, 14, 131],
  }),
}))

const Image = styled('div')(({ theme }) => ({
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  ...getBreakpointsStylesByArray(theme, {
    height: [230, 300, 288, 400, 517, null, 891, null, 857, 1017],
  }),
}))

const Remark = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: 'auto',
  marginRight: 0,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [10, null, null, null, null, null, 25],
    lineHeight: [12, null, null, null, null, null, 30],
    width: [
      '100%',
      null,
      null,
      null,
      `calc(561px - ${spaceObj.tablet}px)`,
      `calc(640px - ${spaceObj.tablet_horizontal}px)`,
      `calc(864px - ${spaceObj.desktop_s}px)`,
      null,
      `calc(1077px - ${spaceObj.macbook}px)`,
      `calc(1087px - ${spaceObj.desktop}px)`,
    ],
    marginTop: [72, null, 50, 104, 93, 80, 184, null, 270, 248],
  }),
}))

const LinkButtonDesktop = styled('a')(({ theme }) => ({
  position: 'absolute',
  display: 'block',

  ...getBreakpointsStylesByArray(theme, {
    right: spaceArr.map(space => space * 2),
    top: [230, 300, 288, 400, 517, null, 667, null, 745, 688],
    height: [112, null, null, null, null, null, null, null, 219],
  }),
  '&.animate': {
    transform: 'rotate(360deg)',
    transition: 'transform .5s',
  },
  '& img': {
    height: '100%',
    objectFit: 'contain',
  },
}))

const LinkButtonDesktopAccessibility = styled('span')(
  () => visuallyHiddenStyles,
)

const LinkButtonMobile = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-end',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [55, 16, 48, 36],
  }),
}))

const getButtonByLinkType = (
  link: Project['link'],
): { mobile: string; desktop: string } => {
  switch (link.type) {
    case 'app': {
      return {
        mobile: 'get the app',
        desktop: 'Get the app',
      }
    }
    case 'site': {
      return {
        mobile: 'visit site',
        desktop: 'Visit site',
      }
    }
    case 'video': {
      return {
        mobile: 'follow the link',
        desktop: 'Follow the link',
      }
    }
    default: {
      return {
        mobile: 'no text defined for this type of project',
        desktop: 'no text defined for this type of project',
      }
    }
  }
}
