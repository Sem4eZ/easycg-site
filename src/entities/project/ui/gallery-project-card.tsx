import { styled } from '@mui/material/styles'
import { animate } from 'popmotion'
import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { Tags } from 'shared/ui/tags'

import { Project } from '../types'

interface Props
  extends Pick<
    Project,
    'id' | 'name' | 'image' | 'date' | 'servicesType' | 'type'
  > {
  hide?: boolean
}

interface Coordinates {
  x: number
  y: number
}

const moved = (initialBox: Coordinates, finalBox: Coordinates): boolean => {
  if (!initialBox || !finalBox) return false

  const xMoved = initialBox.x !== finalBox.x
  const yMoved = initialBox.y !== finalBox.y

  return xMoved || yMoved
}

export const GalleryProjectCard = ({
  id,
  name,
  image,
  date,
  servicesType,
  type,
  hide = false,
}: Props) => {
  const containerRef = useRef<HTMLAnchorElement | null>(null)
  const initialPositionRef = useRef<Coordinates>({
    x: 0,
    y: 0,
  })

  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()

  const doAnimate = isDesktopS || isLaptop || isMacbook || isDesktop

  useLayoutEffect(() => {
    if (!doAnimate) return

    const container = containerRef.current
    if (!container) return

    const box = container.getBoundingClientRect()
    if (moved(initialPositionRef.current, box)) {
      const deltaX = initialPositionRef.current.x - box.x
      const deltaY = initialPositionRef.current.y - box.y

      container.style.transform = `translate(${deltaX}px, ${deltaY}px)`

      animate({
        from: 1,
        to: 0,
        duration: 2000,
        onUpdate: progress => {
          container.style.transform = `translate(${deltaX * progress}px, ${
            deltaY * progress
          }px)`
        },
      })
    }
    initialPositionRef.current = box
  })

  return (
    <Container ref={containerRef} to={`${PAGES.Projects}/${id}`} hide={hide}>
      <ImageWrapper>
        <Image src={image} alt={name} />
        <Decorationfilter className="decorationFilter" />
      </ImageWrapper>
      <Information className="information">
        <div>
          <TagsStyled
            items={[
              <time
                dateTime={`${date.getFullYear()}-${
                  date.getMonth() + 1
                }-${date.getDate()}`}>
                {date.getFullYear()}
              </time>,
              type,
            ]}
          />
          <Title>{name}</Title>
        </div>
        <ServiceIcons>
          {servicesType.map(serviceType => (
            <ServiceIcon key={serviceType}>
              {serviceTypeToIcon[serviceType]}
            </ServiceIcon>
          ))}
        </ServiceIcons>
      </Information>
    </Container>
  )
}

const Container = styled(Link)<{ hide: boolean }>(({ theme, hide }) => ({
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
  '&:hover .decorationFilter': {
    opacity: 1,
  },
  textDecoration: 'none',
  color: theme.palette.text.primary,
  opacity: hide ? 0 : 1,
  width: hide ? '0px !important' : '100%',
  height: hide ? '0px !important' : '100%',
  visibility: hide ? 'hidden' : 'visible',
  padding: hide ? '0 !important' : '0',
  transition: hide
    ? 'opacity .2s, width .2s, height: .2s, visibility .2s'
    : 'unset',
  ...getBreakpointsStylesByArray(theme, {
    padding: [0, null, null, null, null, null, 64, null, 72],
    flexDirection: ['column', null, null, null, null, null, 'row'],
    alignItems: ['flex-start', null, null, null, null, null, 'flex-end'],
    height: ['auto', null, null, null, null, null, 641, null, 787],
    borderRadius: [0, null, null, null, null, null, '10px'],
  }),
}))

const ImageWrapper = styled('div')(({ theme }) => ({
  borderRadius: '10px',
  overflow: 'hidden',
  width: '100%',
  top: 0,
  left: 0,
  ...getBreakpointsStylesByArray(theme, {
    position: ['static', null, null, null, null, null, 'absolute'],
    height: [270, 212, 212, 370, 405, null, 641, null, '100%'],
    marginBottom: [17, null, null, 28, 32, null, 0],
  }),
}))

const Image = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

const Decorationfilter = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.mode === 'dark' ? '#6456DD33' : '#BCDB0F33',
  transition: 'opacity .5s',
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, null, null, 'block'],
  }),
}))

const Information = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',

  ...getBreakpointsStylesByArray(theme, {
    justifyContent: ['space-between'],
    flexDirection: ['column', 'row', null, 'column', 'row', 'column', 'row'],
    alignItems: ['flex-start', null, null, null, null, null, 'center'],
    width: ['100%', null, null, null, null, null, 'auto'],
    gap: [16, null, null, null, 24, null, 32],
  }),
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  marginBottom: 8,
  '& > li': {
    color: theme.palette.text.primary,
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [10, null, null, 16],
      lineHeight: [12, null, null, 19],
    }),
  },
}))

const ServiceIcons = styled('div')(() => ({
  display: 'flex',
  gap: 8,
}))

const ServiceIcon = styled('div')(({ theme }) => ({
  height: 32,
  ...getBreakpointsStylesByArray(theme, {
    color: [
      theme.palette.text.primary,
      null,
      null,
      null,
      null,
      null,
      theme.palette.mode === 'dark'
        ? theme.palette.text.primary
        : theme.palette.inverted,
    ],
  }),
  svg: {
    height: '100%',
    width: 'auto',
  },
}))

const Title = styled('span')(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [25],
    lineHeight: [30],
  }),
}))
