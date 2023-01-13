import { Button, styled } from '@mui/material'

import { projects } from 'entities/project/data'
import { ProjectCard } from 'entities/project/ui/project-card'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { spaceArr } from 'shared/theme'
import { HorizontalSliderContainer } from 'shared/ui/containers'
import { ScrollableList } from 'shared/ui/horizontal-list'
import { XLFont } from 'shared/ui/typography'

const topProjects = projects.slice(0, 6)

export const MainPageProjectsSlider = () => {
  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()

  const showAllProjectsButton = isDesktopS || isLaptop || isMacbook || isDesktop

  return (
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
      {showAllProjectsButton && (
        <SeeAllProjectsButton href={PAGES.Projects}>
          see all projects
        </SeeAllProjectsButton>
      )}
    </HorizontalSliderContainer>
  )
}

const SeeAllProjectsButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: spaceArr,
    marginRight: spaceArr,
  }),
}))
