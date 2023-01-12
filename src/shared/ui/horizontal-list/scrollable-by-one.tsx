import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

interface Props {
  items: string[]
}

export const ScrollableByOneList = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Swiper
      slideToClickedSlide
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={{ sensitivity: 1 }}
      freeMode={{ enabled: true, sticky: true, momentumBounce: true }}
      modules={[Mousewheel, Pagination]}
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
      }}
      onSlideChange={swiper => {
        setActiveIndex(swiper.activeIndex)
      }}>
      {items.map(item => {
        return (
          <SwiperSlide key={item}>
            <Item src={item} />
          </SwiperSlide>
        )
      })}
      <ListPagination activeIndex={activeIndex} />
    </Swiper>
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

const Item = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  width: '100%',
  ...getBreakpointsStylesByArray(theme, {
    height: [260, null, null, 378, 484, null, 855, null, 1214],
  }),
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
