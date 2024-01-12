import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { getNextProject, getPreviousProject } from 'entities/project/data'
import { Project } from 'entities/project/types'
import { ProjectPaginationCard } from 'entities/project/ui/project-pagination-card'

import { PAGES } from 'shared/config'
import { db } from 'shared/firebase'
import { ArrowFatIcon } from 'shared/icons/arrow-fat'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr } from 'shared/theme'

interface Props {
  currentProjectId: Project['id']
}

export const PagePagination = ({ currentProjectId }: Props) => {
  const [projects, setProjects] = React.useState<Project[]>([]) // Состояние для хранения данных проектов

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

  const { isMobileS, isDesktopS, isLaptop, isMacbook, isDesktop } =
    useGetDevice()

  const showSlider = isDesktopS || isLaptop || isMacbook || isDesktop

  return (
    <Container>
      {!showSlider && (
        <ProjectsNavigationButtons>
          <Button
            href={`/projects/${getPreviousProject(currentProjectId).id}`}
            endIcon=""
            startIcon={<ArrowFatIcon />}>
            previous {!isMobileS && 'project'}
          </Button>
          <Button href={`/projects/${getNextProject(currentProjectId).id}`}>
            next {!isMobileS && 'project'}
          </Button>
        </ProjectsNavigationButtons>
      )}

      {showSlider && (
        <SliderContainer>
          <Swiper spaceBetween={0} slidesPerView={2} loop>
            <ListNavigation />
            {projects
              .filter(project => project.id !== currentProjectId)
              .map(project => (
                <SwiperSlide key={project.id}>
                  <ProjectPaginationCard {...project} />
                </SwiperSlide>
              ))}
          </Swiper>
        </SliderContainer>
      )}
    </Container>
  )
}

const ListNavigation = () => {
  const swiper = useSwiper()

  return (
    <SliderNavigationButtons>
      <PreviousSliderNavigationButton>
        <PreviousButton
          endIcon=""
          startIcon={<ArrowFatIcon />}
          onClick={() => swiper.slidePrev()}>
          previous project
        </PreviousButton>
      </PreviousSliderNavigationButton>
      <SliderNavigationButton>
        <Button onClick={() => swiper.slideNext()}>next project</Button>
      </SliderNavigationButton>
    </SliderNavigationButtons>
  )
}
const Container = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [76, null, null, null, null, null, 230, null],
  }),
  '& .swiper-slide-next a': {
    marginRight: 0,
    marginLeft: 'auto',
  },
}))

const SliderContainer = styled('div')(({ theme }) => ({
  maxWidth: 1120,
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'content-box',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
  '& .swiper': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& .swiper-wrapper': {
    order: 1,
  },
}))

const ProjectsNavigationButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 50,
  paddingBottom: 24,

  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,

    maxWidth: ['100%', null, null, 600, 494, 740],
  }),
}))

const SliderNavigationButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [null, null, null, null, null, null, 354, null, 349, 538],
    paddingBottom: [null, null, null, null, null, null, 100, null, 93],
  }),
}))

const SliderNavigationButton = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    width: [400, null, null, null, null, null, null, null, 352, 400],
  }),
}))

const PreviousSliderNavigationButton = styled(SliderNavigationButton)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}))

const PreviousButton = styled(Button)(() => ({
  color: '#797F9A',
  '&:active': {
    color: '#CFD6D9',
  },
}))
