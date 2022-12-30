import { Button, styled } from '@mui/material'
import { useRef } from 'react'

import { projects } from 'entities/project/data'
import { ProjectCard } from 'entities/project/ui/project-card'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr } from 'shared/theme'
import {
  CenterWithSectionNumber,
  FreeRightPartContainer,
  HorizontalSliderContainer,
} from 'shared/ui/containers'
import { Flow } from 'shared/ui/flow'
import { Hero } from 'shared/ui/hero'
import { HorizontalList, ScrollableList } from 'shared/ui/horizontal-list'
import { XLFont } from 'shared/ui/typography'

const topProjects = projects.slice(0, 6)

const HomePage = () => {
  const processSectionRef = useRef<HTMLDivElement | null>(null)
  return (
    <div>
      <Hero />
      <Block />
      <FreeRightPartContainer
        number={1}
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
      <HorizontalSliderContainer>
        <XLFont variant="h2" textAlign="center">
          our projects
        </XLFont>
        <ScrollableList parallax>
          {topProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              date={project.date}
              description={project.description}
              image={project.image}
              type={project.type}
              servicesType={project.servicesType}
              zIndex={topProjects.length - i}
            />
          ))}
        </ScrollableList>
        <SeeAllProjectsButton href={PAGES.Projects}>
          see all projects
        </SeeAllProjectsButton>
      </HorizontalSliderContainer>

      <CenterWithSectionNumber
        ref={processSectionRef}
        number={3}
        section="process"
        title={['how we work']}
        content={<Flow sectionRef={processSectionRef} />}
      />

      <Block />
    </div>
  )
}

export default HomePage

const Block = styled('div')`
  height: 1000px;
  background-color: yellow;
`

const SeeAllProjectsButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: spaceArr,
    marginRight: spaceArr,
  }),
}))
