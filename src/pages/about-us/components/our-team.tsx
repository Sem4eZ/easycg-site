import { styled } from '@mui/material/styles'
import { Mousewheel } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { team } from 'entities/team/data'
import { TeammateCard } from 'entities/team/ui/teammate-card'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { XLFont } from 'shared/ui/typography'

export const AboutUsPageOurTeam = () => {
  const { isMobileSLandscape, isMobileLandscape, isTablet } = useGetDevice()

  const showSlider = !isMobileLandscape && !isMobileSLandscape

  return (
    <>
      <Container>
        <SectionNumber
          viewBoxWidth={340}
          animate
          yOffset={isTablet ? 257 : 256}
          type="sectionSmall">
          02
        </SectionNumber>

        <Title variant="h2" textAlign="center">
          our team
        </Title>
        {showSlider ? (
          <Swiper
            slideToClickedSlide
            slidesPerView={'auto'}
            breakpoints={{
              320: {
                spaceBetween: 24,
              },
              390: {
                spaceBetween: 16,
              },
              768: {
                spaceBetween: 48,
              },
              924: {
                spaceBetween: 56,
              },
              1200: {
                spaceBetween: 106,
              },
            }}
            mousewheel={{ sensitivity: 1 }}
            freeMode={{ enabled: true, sticky: true, momentumBounce: true }}
            modules={[Mousewheel]}
            onScroll={(swiper, e) => {
              if (swiper.isEnd || swiper.isBeginning) return
              e.preventDefault()
              if (e.deltaY > 0) {
                swiper.slideTo(swiper.activeIndex + 1)
              } else {
                swiper.slideTo(swiper.activeIndex - 1)
              }
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
            {team.map(teammate => {
              return (
                <SwiperSlide key={teammate.id} style={{ width: 'auto' }}>
                  <TeammateCard
                    key={teammate.id}
                    name={teammate.name}
                    date={teammate.date}
                    description={teammate.description}
                    image={teammate.image}
                    position={teammate.position}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        ) : (
          <TeamList>
            {team.map(teammate => {
              return (
                <TeammateCard
                  key={teammate.id}
                  name={teammate.name}
                  date={teammate.date}
                  description={teammate.description}
                  image={teammate.image}
                  position={teammate.position}
                />
              )
            })}
          </TeamList>
        )}
      </Container>
    </>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: [0, spaceObj.se_horizontal, 0],
    marginTop: [30, 43, 13, 100, 112, 95, 453, null, 213, 166],
  }),
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

const SectionNumber = styled(TextOutlined)(({ theme }) => ({
  position: 'absolute',
  top: '-71px',
  left: '-90px',
}))

const TeamList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [0, 104, 0, 66],
  }),
}))
