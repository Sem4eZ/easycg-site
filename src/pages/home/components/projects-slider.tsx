import { Button, styled } from '@mui/material'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mousewheel } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { projects } from 'entities/project/data'
import { ProjectCard } from 'entities/project/ui/project-card'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'
import { PARALLAX_CLASS } from 'shared/ui/horizontal-list/scrollable'
import { XLFont } from 'shared/ui/typography'

const topProjects = projects.slice(0, 6)

export const MainPageProjectsSlider = () => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()

  const showAllProjectsButton = isDesktopS || isLaptop || isMacbook || isDesktop
  const doExpandCards = isDesktopS || isLaptop || isMacbook || isDesktop

  const doParallaxListItemImage = (
    container: HTMLDivElement,
    progress: number,
  ) => {
    const cards = Array.from(
      container.getElementsByClassName(
        PARALLAX_CLASS,
      ) as HTMLCollectionOf<HTMLElement>,
    )

    for (let i = 0; i < cards.length; i++) {
      setTimeout(() => {
        const persentage = progress * 100

        const element = cards[i]
        element.style.transition = 'transform 1s'
        element.style.transform = `translate(-${
          persentage < 45 ? persentage : 45
        }%,0)`
      })
    }
  }

  return (
    <Container ref={containerRef}>
      <Title variant="h2" textAlign="center">
        our projects
      </Title>

      <Swiper
        slideToClickedSlide
        slidesPerView={'auto'}
        breakpoints={{
          320: {
            spaceBetween: 16,
          },
          390: {
            spaceBetween: 16,
          },
          768: {
            spaceBetween: 48,
          },
          924: {
            spaceBetween: 96,
          },
          1200: {
            spaceBetween: 114,
          },
        }}
        mousewheel={{ sensitivity: 1 }}
        freeMode={{ enabled: true, sticky: false, momentumBounce: true }}
        modules={[Mousewheel]}
        onScroll={(swiper, e) => {
          console.log('e', e)
          console.log('swiper', swiper)
          if (!containerRef.current) return
          doParallaxListItemImage(containerRef.current, swiper.progress)
        }}
        onTouchEnd={swiper => {
          const swiperNew = swiper as SwiperRef['swiper'] & {
            swipeDirection: 'prev' | 'next'
          }
          if (swiperNew.swipeDirection === 'next') {
            swiper.slideTo(swiper.activeIndex + 1)
          } else {
            swiper.slideTo(swiper.activeIndex - 1)
          }
        }}>
        {topProjects.map(project => {
          return (
            <SwiperSlide key={project.id} style={{ width: 'auto' }}>
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                date={project.date}
                description={project.description}
                image={project.image}
                type={project.type}
                servicesType={project.servicesType}
              />
            </SwiperSlide>
          )
        })}
        {doExpandCards && (
          <SwiperSlide style={{ opacity: 0, width: '500px' }}></SwiperSlide>
        )}
      </Swiper>

      {showAllProjectsButton && (
        <SeeAllProjectsButton onClick={() => navigate(PAGES.Projects)}>
          see all projects
        </SeeAllProjectsButton>
      )}
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingRight: [0, spaceObj.se_horizontal, 0],
    paddingTop: [56, 60, null, 120, 118, null, 111, null, 184, 200],
    paddingBottom: [29, 46, 64, 102, 84, 112, 57, null, 180, 260],
  }),
  '& .swiper-slide:first-of-type': {
    ...getBreakpointsStylesByArray(theme, {
      paddingLeft: spaceArr,
    }),
  },
}))

const Title = styled(XLFont)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [48, null, null, 64, 72, null, 104, null, 96],
    paddingRight: [
      spaceObj.se,
      0,
      spaceObj.se_horizontal,
      spaceObj.tablet,
      spaceObj.tablet_horizontal,
      spaceObj.desktop_s,
      spaceObj.laptop,
      spaceObj.macbook,
      spaceObj.desktop,
    ],
  }),
}))

const SeeAllProjectsButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  marginTop: 90,
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: spaceArr,
    marginRight: spaceArr,
  }),
}))
