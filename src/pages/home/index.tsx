import { Button, styled } from '@mui/material'
import { useRef } from 'react'

import { projects } from 'entities/project/data'
import { ProjectCard } from 'entities/project/ui/project-card'
import { services } from 'entities/services/data'
import { ServicesHeroMenu } from 'entities/services/ui/services-hero-menu'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr } from 'shared/theme'
import { Accordion } from 'shared/ui/accordion'
import {
  CenterWithSectionNumber,
  FreeRightPartContainer,
  HorizontalSliderContainer,
} from 'shared/ui/containers'
import { Flow } from 'shared/ui/flow'
import { Hero } from 'shared/ui/hero'
import { HorizontalList, ScrollableList } from 'shared/ui/horizontal-list'
import { TextOutlined } from 'shared/ui/outlined-text'
import { XLFont } from 'shared/ui/typography'

const topProjects = projects.slice(0, 6)

const HomePage = () => {
  const processSectionRef = useRef<HTMLDivElement | null>(null)
  return (
    <div>
      <Hero menu={<ServicesHeroMenu />} />

      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={680} animate>
            01
          </TextOutlined>
        }
        section="about us"
        title={[
          'hello there! it’s EASY on the air',
          'we don’t speak about digital',
          ' we DO digital',
        ]}
        description={[
          <>
            let us quess! are you looking for a mobile app or website?
            <b>it’s for us</b>
          </>,
          <>
            AR/VR? wait for it... <b>we can do it, too</b>
          </>,
          <>
            we create <b>simple solutions</b> for serious buisness since 2018
          </>,
        ]}
        content={
          <HorizontalList
            title="our style is"
            items={['locanic', 'simple', 'clear', 'accessible']}
          />
        }
      />
      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={800} animate>
            02
          </TextOutlined>
        }
        section="services"
        title={['what we DO']}
        content={
          <Accordion
            name="Services"
            items={services.map(service => ({
              title: service.name,
              titleExplanation: service.nameExplanation,
              content: service.description,
            }))}
          />
        }
      />

      <HorizontalSliderContainer>
        <XLFont variant="h2" textAlign="center">
          our projects
        </XLFont>
        <ScrollableList parallax>
          {topProjects.map(project => (
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
          ))}
        </ScrollableList>
        <SeeAllProjectsButton href={PAGES.Projects}>
          see all projects
        </SeeAllProjectsButton>
      </HorizontalSliderContainer>

      <CenterWithSectionNumber
        ref={processSectionRef}
        number={
          <TextOutlined viewBoxWidth={795} animate>
            03
          </TextOutlined>
        }
        section="process"
        title={['how we work']}
        content={<Flow sectionRef={processSectionRef} />}
      />
    </div>
  )
}

export default HomePage

const SeeAllProjectsButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: spaceArr,
    marginRight: spaceArr,
  }),
}))
