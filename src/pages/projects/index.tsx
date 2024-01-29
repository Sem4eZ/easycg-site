import { styled } from '@mui/material/styles'
// Подключаем базу данных Firebase
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useMemo } from 'react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { useProjectsFilter } from 'features/project/filter'

import useProjects from 'entities/project/data'
import { Project } from 'entities/project/types'
import { GalleryProjectCard } from 'entities/project/ui/gallery-project-card'
import { GalleryProjectCardRow } from 'entities/project/ui/gallery-project-card-row'
import { useProjectViewPicker } from 'entities/project/ui/use-project-view-picker'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

import { db } from '../../shared/firebase'

const ProjectsPage = () => {
  const { state } = useLocation()
  const { isMobile, isDesktopS, isLaptop, isMacbook, isDesktop } =
    useGetDevice()

  const { template: filterTemplate, filter } = useProjectsFilter({
    initial: state?.filter,
  })

  const { template: viewTemplate, view } = useProjectViewPicker()

  const [projects, setProjects] = React.useState<Project[]>([]) // Состояние для хранения данных проектов
  const projectsLength = useProjects()
  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'projects')) // Получаем данные из коллекции 'projects'
    const projectsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    setProjects(projectsData as Project[])
  }

  useEffect(() => {
    fetchData()
  }, [])

  const expectedServicesTypes = [
    'mobile',
    'web',
    'CGI',
    'AR',
    'VR',
    'UXUI',
    'APP',
    'XR',
    'clothes',
    'food',
  ]

  const filteredProjects = useMemo(() => {
    if (filter.length === 0) {
      return projects
    }

    return projects.filter(
      project =>
        filter.includes(project.servicesType as any) &&
        expectedServicesTypes.includes(project.servicesType as any),
    )
  }, [filter, projects])

  const showSlider =
    isMobile || isDesktopS || isLaptop || isMacbook || isDesktop

  return (
    <Page
      title="projects"
      decorationText={
        <TextOutlined viewBoxWidth={840} type="header">
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
            {projectsLength.length} projects
          </ProjectsCount>
        </FilterArea>
      }>
      <Content>
        {showSlider && view === 'carousel' && (
          <Swiper
            style={{ marginLeft: 0, marginRight: 0 }}
            slideToClickedSlide
            slidesPerView={'auto'}
            breakpoints={{
              320: { spaceBetween: 16 },
              390: { spaceBetween: 56 },
              768: { spaceBetween: 48 },
              924: { spaceBetween: 96 },
              1200: { spaceBetween: 112 },
              1728: { spaceBetween: 80 },
              1920: { spaceBetween: 112 },
            }}
            freeMode={{ enabled: true, sticky: false, momentumBounce: true }}
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
            {filteredProjects
              .filter(project => project.visible)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime(),
              )
              .map(project => (
                <SwiperSlide key={project.id} style={{ width: 'auto' }}>
                  <GalleryProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    date={project.date}
                    image={project.image}
                    type={project.type}
                    servicesType={project.servicesType}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}

        {!showSlider && view === 'carousel' && (
          <List>
            {filteredProjects
              .filter(project => project.visible)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime(),
              )
              .map(project => (
                <li key={project.id}>
                  <GalleryProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    date={project.date}
                    image={project.image}
                    type={project.type}
                    servicesType={project.servicesType}
                  />
                </li>
              ))}
          </List>
        )}

        {view === 'list' && (
          <RowList>
            {filteredProjects
              .filter(project => project.visible)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime(),
              )
              .map(project => (
                <li key={project.id}>
                  <GalleryProjectCardRow
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    servicesType={project.servicesType}
                  />
                </li>
              ))}
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

const FilterArea = styled('div')(() => ({
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
