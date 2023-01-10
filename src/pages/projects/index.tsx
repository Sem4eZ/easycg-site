import { styled } from '@mui/material/styles'
import { useMemo, useRef } from 'react'

import { useServicesFilter } from 'features/services/filter'

import { projects } from 'entities/project/data'
import { GalleryProjectCard } from 'entities/project/ui/gallery-project-card'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const ProjectsPage = () => {
  const galleryRef = useRef<HTMLElement | null>(null)
  const { template: filterTemplate, filter } = useServicesFilter()

  const newProjects = useMemo(() => {
    return projects
      .filter(project => {
        if (filter.includes('all')) {
          return project
        }
        for (let i = 0; i < project.servicesType.length; i++) {
          if (filter.includes(project.servicesType[i])) {
            return project
          }
        }
      })
      .sort(() => Math.random() - 0.5)
  }, [filter])

  return (
    <Page
      title="work"
      decorationText={
        <TextOutlined viewBoxWidth={800} type="header" animate>
          02
        </TextOutlined>
      }
      filter={filterTemplate}>
      <Content ref={galleryRef} data-elementsCount={projects.length}>
        {newProjects.map(project => (
          <GalleryProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            date={project.date}
            servicesType={project.servicesType}
            type={project.type}
          />
        ))}
      </Content>
    </Page>
  )
}

export default ProjectsPage

const Content = styled('section')(({ theme }) => ({
  display: 'grid',

  gridTemplate: `
            "a a a b" 1fr
            "c c d d" 1fr
            "e e e e" 1fr`,

  '[data-elementsCount="1"]': {
    gridTemplate: `"a a a a" `,
  },

  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
}))
