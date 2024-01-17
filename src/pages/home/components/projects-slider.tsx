import { Button, styled } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useRef } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { Project } from 'entities/project/types'
import { ProjectCard } from 'entities/project/ui/project-card'

import { PAGES } from 'shared/config'
import { db } from 'shared/firebase'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'
import { XLFont } from 'shared/ui/typography'

import useProjects from './../../../entities/project/data'

export const MainPageProjectsSlider = () => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const {
    isMobileSLandscape,
    isMobileLandscape,
    isDesktopS,
    isLaptop,
    isMacbook,
    isDesktop,
  } = useGetDevice()

  const showAllProjectsButton = isDesktopS || isLaptop || isMacbook || isDesktop
  const showSlider = !isMobileSLandscape && !isMobileLandscape

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

  const topProjects = projects.slice(0, 10)

  return (
    <Container ref={containerRef}>
      <Title variant="h2" textAlign="center">
        our projects
      </Title>

      {showSlider && (
        <Swiper
          slideToClickedSlide
          slidesPerView={'auto'}
          speed={1200}
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
          }}>
          {topProjects
            .filter(project => project.visible)
            .map(project => {
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
        </Swiper>
      )}

      {!showSlider && (
        <List>
          {topProjects
            .filter(project => project.visible)
            .map(project => {
              return (
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
              )
            })}
        </List>
      )}

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
    paddingRight: [0, spaceObj.se_horizontal, 0, spaceObj.ip13_horizontal, 0],
    paddingTop: [56, 60, null, 120, 118, null, 111, null, 184, 200],
    paddingBottom: [29, 46, 64, 102, 84, 112, 57, null, 180, 260],
    paddingLeft: [0, spaceObj.se_horizontal, 0, spaceObj.ip13_horizontal, 0],
  }),
  '& .swiper-slide:first-of-type': {
    ...getBreakpointsStylesByArray(theme, {
      paddingLeft: spaceArr,
    }),
  },
}))

const List = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [0, 48, 0, 121],
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

const SeeAllProjectsButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  marginTop: 90,
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: spaceArr,
    marginRight: spaceArr,
  }),
}))
