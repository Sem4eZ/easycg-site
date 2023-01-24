import { styled } from '@mui/material/styles'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Mousewheel } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { useProjectsFilter } from 'features/project/filter'

import { projects } from 'entities/project/data'
import { Project } from 'entities/project/types'
import { GalleryProjectCard } from 'entities/project/ui/gallery-project-card'
import { GalleryProjectCardRow } from 'entities/project/ui/gallery-project-card-row'
import { useProjectViewPicker } from 'entities/project/ui/use-project-view-picker'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useDisabelSliderOnHighDistance } from 'shared/lib/use-disable-slider-on-high-distance'
import { useGetDevice } from 'shared/lib/use-get-device'
import { spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const ProjectsPage = () => {
  const { state } = useLocation()
  const { isMobile, isDesktopS, isLaptop, isMacbook, isDesktop } =
    useGetDevice()

  const { template: filterTemplate, filter } = useProjectsFilter({
    initial: state?.filter,
  })
  const { template: viewTemplate, view } = useProjectViewPicker()

  const filteredProjects = useMemo(() => {
    const filteredProjects: Project[] = []

    if (filter.length === 0) {
      return projects
    }

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      let inFilter = false
      for (let j = 0; j < project.servicesType.length; j++) {
        if (filter.includes(project.servicesType[j])) {
          inFilter = true
          break
        }
      }

      if (inFilter) {
        filteredProjects.push(project)
      }
    }

    return filteredProjects
  }, [filter])

  const showSlider =
    isMobile || isDesktopS || isLaptop || isMacbook || isDesktop

  const swiperRef = useDisabelSliderOnHighDistance()

  return (
    <Page
      title="work"
      decorationText={
        <TextOutlined viewBoxWidth={800} type="headerSmall">
          02
        </TextOutlined>
      }
      filter={
        <FilterArea>
          <FilterButton style={{ gridArea: 'filter' }}>
            {filterTemplate}
          </FilterButton>
          <div style={{ gridArea: 'view' }}>{viewTemplate}</div>
          <ProjectsCount style={{ gridArea: 'projects-count' }}>
            {projects.length} projects
          </ProjectsCount>
        </FilterArea>
      }>
      <Content>
        {showSlider && view === 'carousel' && (
          <Swiper
            ref={swiperRef}
            slideToClickedSlide
            slidesPerView={'auto'}
            breakpoints={{
              320: {
                spaceBetween: 16,
              },
              390: {
                spaceBetween: 56,
              },
              768: {
                spaceBetween: 48,
              },
              924: {
                spaceBetween: 96,
              },
              1200: {
                spaceBetween: 112,
              },
              1728: {
                spaceBetween: 80,
              },
              1920: {
                spaceBetween: 112,
              },
            }}
            mousewheel={{ sensitivity: 1 }}
            freeMode={{ enabled: true, sticky: false, momentumBounce: true }}
            modules={[Mousewheel]}
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
            {filteredProjects.map(project => {
              return (
                <SwiperSlide key={project.id} style={{ width: 'auto' }}>
                  <GalleryProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    date={project.date}
                    image={project.image}
                    type={project.type}
                    servicesType={project.servicesType}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}

        {!showSlider && view === 'carousel' && (
          <List>
            {filteredProjects.map(project => {
              return (
                <li>
                  <GalleryProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    date={project.date}
                    image={project.image}
                    type={project.type}
                    servicesType={project.servicesType}
                  />
                </li>
              )
            })}
          </List>
        )}

        {view === 'list' && (
          <RowList>
            {filteredProjects.map(project => {
              return (
                <li>
                  <GalleryProjectCardRow
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    tags={project.tags}
                  />
                </li>
              )
            })}
          </RowList>
        )}
      </Content>
    </Page>
  )
}

export default ProjectsPage

const Content = styled('section')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '32px',
  overflow: 'hidden',

  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    gap: [112, 104, 128, 166, 256, null, 32],
    paddingBottom: [189, 127, 50, 82, 108, 223, 75, null, 0, 171],
  }),
}))

const FilterArea = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}))

const FilterButton = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  ...getBreakpointsStylesByArray(theme, {
    width: ['100%', null, null, null, 'auto'],
    marginBottom: [56, null, null, 70, 0],
  }),
}))

const ProjectsCount = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    display: ['block', null, null, null, 'none'],
  }),
}))

const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [112, 104, null, 166, 256],
  }),
}))

const RowList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& li:first-of-type a': {
    paddingTop: 0,
  },
  '&:hover': {
    '& a': {
      borderBottomColor: theme.palette.text.disabled,
      color: theme.palette.text.disabled,
    },
  },
  '& li:hover a': {
    borderBottomColor: theme.palette.accent,
    color: theme.palette.text.primary,
  },
}))
