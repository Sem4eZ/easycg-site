import { styled } from '@mui/material/styles'
import { useMemo, useRef } from 'react'

import { useServicesFilter } from 'features/services/filter'

import { projects } from 'entities/project/data'
import { Project } from 'entities/project/types'
import { GalleryProjectCard } from 'entities/project/ui/gallery-project-card'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const ProjectsPage = () => {
  const galleryRef = useRef<HTMLElement | null>(null)
  const { template: filterTemplate, filter } = useServicesFilter()

  const newProjects = useMemo(() => {
    const filteredProjects: Project[] = []
    const restProjects: Project[] = []

    if (filter.includes('all')) {
      return {
        filtered: projects.sort(() => Math.random() - 0.5),
        rest: restProjects,
      }
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
      } else {
        restProjects.push(project)
      }
    }
    filteredProjects.sort(() => Math.random() - 0.5)
    restProjects.sort(() => Math.random() - 0.5)

    return {
      filtered: filteredProjects,
      rest: restProjects,
    }
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
      <Content
        ref={galleryRef}
        data-elements-count={newProjects.filtered.length}>
        {newProjects.filtered.map(project => (
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
        {newProjects.rest.map(project => (
          <GalleryProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            date={project.date}
            servicesType={project.servicesType}
            type={project.type}
            hide={true}
          />
        ))}
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

  '&[data-elements-count="1"]': {
    '& > a:nth-of-type(5n + 1)': {
      width: '100%',
    },
  },

  '&[data-elements-count="2"]': {
    '& > a:nth-of-type(5n + 1)': {
      ...getBreakpointsStylesByArray(theme, {
        width: ['100%', null, null, null, null, null, 'calc(50% - 16px)'],
      }),
    },
    '& > a:nth-of-type(5n + 2)': {
      ...getBreakpointsStylesByArray(theme, {
        width: ['100%', null, null, null, null, null, 'calc(50% - 16px)'],
      }),
    },
  },

  '& > a:nth-of-type(5n + 1)': {
    justifyContent: 'flex-start',
    ...getBreakpointsStylesByArray(theme, {
      width: ['100%', null, null, null, null, null, 'calc(66% - 16px)'],
    }),
  },
  '& > a:nth-of-type(5n + 2)': {
    ...getBreakpointsStylesByArray(theme, {
      width: ['100%', null, null, null, null, null, 'calc(34% - 16px)'],
      justifyContent: ['flex-start', null, null, null, null, null, 'flex-end'],
    }),
    '& .information': {
      ...getBreakpointsStylesByArray(theme, {
        flexDirection: [
          'column',
          'row',
          null,
          'column',
          'row',
          'column',
          'row-reverse',
        ],
      }),
    },
  },
  '& > a:nth-of-type(5n + 3)': {
    ...getBreakpointsStylesByArray(theme, {
      width: ['100%', null, null, null, null, null, 'calc(50% - 16px)'],
    }),
    justifyContent: 'flex-start',
  },
  '& > a:nth-of-type(5n + 4)': {
    ...getBreakpointsStylesByArray(theme, {
      width: ['100%', null, null, null, null, null, 'calc(50% - 16px)'],
      justifyContent: ['flex-start', null, null, null, null, null, 'flex-end'],
    }),
    '& .information': {
      ...getBreakpointsStylesByArray(theme, {
        flexDirection: [
          'column',
          'row',
          null,
          'column',
          'row',
          'column',
          'row-reverse',
        ],
      }),
    },
  },
  '& > a:nth-of-type(5n)': {
    width: '100%',
    justifyContent: 'flex-start',
  },
}))
