import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'

import {
  Image,
  getImagePath,
  getImageSrcSetByImageObj,
} from 'entities/image/types'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useDisabelSliderOnHighDistance } from 'shared/lib/use-disable-slider-on-high-distance'
import { maxWidth } from 'shared/theme'

interface Props {
  items: Image[]
}

export const ScrollableByOneList = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const swiperRef = useDisabelSliderOnHighDistance()

  return (
    <Container>
      <Swiper
        ref={swiperRef}
        slideToClickedSlide
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={{ sensitivity: 1 }}
        freeMode={{ enabled: true, sticky: true, momentumBounce: true }}
        modules={[Mousewheel, Pagination]}
        onScroll={(swiper, e) => {
          if (swiper.isEnd) {
            if (e.deltaY < 0) {
              e.preventDefault()

              swiper.slideTo(swiper.activeIndex - 1)
              return
            }
          }

          if (swiper.isBeginning) {
            if (e.deltaY > 0) {
              e.preventDefault()

              swiper.slideTo(swiper.activeIndex + 1)
              return
            }
          }

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
        }}
        onSlideChange={swiper => {
          setActiveIndex(swiper.activeIndex)
        }}>
        {items.map(item => {
          const imageSrcSet = getImageSrcSetByImageObj(item)

          return (
            <SwiperSlide key={item.name}>
              <Item>
                {imageSrcSet.map(imageSrcSetData => {
                  return (
                    <source
                      srcSet={imageSrcSetData.path}
                      media={imageSrcSetData.media}></source>
                  )
                })}

                <img src={getImagePath(item, 1920)} />
              </Item>
            </SwiperSlide>
          )
        })}
        <ListPagination activeIndex={activeIndex} />
      </Swiper>
    </Container>
  )
}

const ListPagination = ({ activeIndex }: { activeIndex: number }) => {
  const swiper = useSwiper()

  return (
    <PaginationContainer>
      {swiper.slides.map((paginationItem, i) => (
        <PaginationItem
          key={i}
          active={activeIndex === i}
          onClick={() => swiper.slideTo(i)}>
          <SnowflakeIcon />
        </PaginationItem>
      ))}
    </PaginationContainer>
  )
}

const Container = styled('div')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [30, 43, 13, 100, 112, 95, 453, null, 213, 166],
  }),
  '& .swiper-wrapper': {
    transitionDelay: '0.5s',
  },
}))

const Item = styled('picture')(({ theme }) => ({
  width: '100%',
  ...getBreakpointsStylesByArray(theme, {
    height: [260, null, null, 378, 484, null, 855, null, 1214],
  }),
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}))

const PaginationContainer = styled('div')(({ theme }) => ({
  justifyContent: 'center',

  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, null, null, 'flex'],
    gap: [0, null, null, null, null, null, 128, null, 48, 128],
    marginTop: [0, null, null, null, null, null, 48],
  }),
}))

const PaginationItem = styled('div')<{ active: boolean }>(
  ({ theme, active }) => ({
    color: active ? theme.palette.accent : theme.palette.text.secondary,
    transition: 'color .2s',
    ...getBreakpointsStylesByArray(theme, {
      height: [0, null, null, null, null, null, 48, null, 26, 48],
    }),
    '& svg': {
      height: '100%',
      width: 'auto',
    },
  }),
)
