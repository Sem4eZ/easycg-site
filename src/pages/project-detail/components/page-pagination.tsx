import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { transform } from 'typescript'

import { Project } from 'entities/project/types'
import { GalleryProjectCard } from 'entities/project/ui/gallery-project-card'
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
  const getPreviousProject = (id: Project['id']): Project => {
    let currentProjectId = 0
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      if (project.id === id) {
        currentProjectId = i
      }
    }

    if (currentProjectId === 0) return projects[projects.length - 1]
    return projects[currentProjectId - 1]
  }

  const getNextProject = (id: Project['id']): Project => {
    let currentProjectId = 0
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      if (project.id === id) {
        currentProjectId = i
      }
    }

    if (currentProjectId === projects.length - 1) return projects[0]
    return projects[currentProjectId + 1]
  }
  const [projectsAll, setProjects] = React.useState<Project[]>([]) // Состояние для хранения данных проектов
  const projects = projectsAll.filter(project => project.visible)

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
  const navigate = useNavigate()

  return (
    <Container>
      {!showSlider && (
        <ProjectsNavigationButtons>
          <Button
            onClick={() =>
              navigate(`/projects/${getPreviousProject(currentProjectId).id}`)
            }
            endIcon=""
            startIcon={<ArrowFatIcon />}>
            previous {!isMobileS && 'project'}
          </Button>
          <Button
            onClick={() =>
              navigate(`/projects/${getNextProject(currentProjectId).id}`)
            }>
            next {!isMobileS && 'project'}
          </Button>
        </ProjectsNavigationButtons>
      )}

      {showSlider && (
        <SliderContainer>
          <Swiper spaceBetween={30} slidesPerView={2} loop>
            <ListNavigation />
            {projects
              .filter(project => project.visible)
              .filter(project => project.id !== currentProjectId)
              .map(project => (
                <SwiperSlide key={project.id}>
                  <GalleryProjectCard {...project} />
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
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}))

const SliderContainer = styled('div')(({ theme }) => ({
  maxWidth: 1320,
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
  ...getBreakpointsStylesByArray(theme, {}),
  '& .swiper': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& .swiper-wrapper': {
    display: 'flex',
    order: 1,
    ...getBreakpointsStylesByArray(theme, {
      marginLeft: [null, null, null, null, null, null, 170, null, 140, 140],
    }),
  },
}))

const ProjectsNavigationButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
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
  justifyContent: 'space-around',
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [null, null, null, null, null, null, 354, null, 349, 48],
    paddingBottom: [null, null, null, null, null, null, 100, null, 93],
  }),
}))

const SliderNavigationButton = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  ...getBreakpointsStylesByArray(theme, {
    width: [400, null, null, null, null, null, null, null, 352, 400],
  }),
}))

const PreviousSliderNavigationButton = styled(SliderNavigationButton)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
}))

const PreviousButton = styled(Button)(() => ({
  color: '#797F9A',
  '&:active': {
    color: '#CFD6D9',
  },
}))
