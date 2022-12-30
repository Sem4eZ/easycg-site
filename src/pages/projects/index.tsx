import { useServicesFilter } from 'features/services/filter'

import { projects } from 'entities/project/data'

import { HorizontalList } from 'shared/ui/horizontal-list'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const ProjectsPage = () => {
  const { template: filterTemplate, filter } = useServicesFilter()
  return (
    <Page
      title="work"
      decorationText={
        <TextOutlined viewBoxWidth={680} type="header">
          01
        </TextOutlined>
      }
      filter={
        <HorizontalList
          title="our style is"
          items={['locanic', 'simple', 'clear', 'accessible']}
        />
      }>
      {filterTemplate}
      {projects
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
        .map(project => (
          <div>{project.name + ' ' + project.servicesType.join(' ')}</div>
        ))}
    </Page>
  )
}

export default ProjectsPage
