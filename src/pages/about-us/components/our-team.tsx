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
  const { isMobileSLandscape, isMobileLandscape } = useGetDevice()

  const showSlider = !isMobileLandscape && !isMobileSLandscape

  return (
    <Container>
      <SectionNumber viewBoxWidth={800} animate>
        02
      </SectionNumber>

      <Title variant="h2">our team</Title>
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
  marginRight: 0,
  marginLeft: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [48, null, null, 64, 72, null, 104, null, 96],
    paddingLeft: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      0,
    ],
    paddingRight: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      0,
    ],
    width: [
      '100%',
      null,
      null,
      null,
      '561px',
      '640px',
      '864px',
      null,
      '1077px',
      '1087px',
    ],
  }),
}))

const SectionNumber = styled(TextOutlined)(({ theme }) => ({
  position: 'absolute',
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, 'block'],
    top: [null, null, null, null, 88, null, -211],
    left: [null, null, null, null, -84, null, '-20%', '-16%', '-14%'],
    transform: [null, null, null, null, 'scale(0.6)', null, 'scale(0.424)'],
  }),
}))

const TeamList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [0, 104, 0, 66],
  }),
}))
