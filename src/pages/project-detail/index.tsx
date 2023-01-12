import { styled } from '@mui/material/styles'
import { useNavigate, useParams } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details'

import {
  projectDetailsToPricesBlockItems,
  projects,
} from 'entities/project/data'
import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'
import { ScrollableByOneList } from 'shared/ui/horizontal-list/scrollable-by-one'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'
import { PricesBlock } from 'shared/ui/prices-block'
import { Tags } from 'shared/ui/tags'

import { ProjectDetailHero } from './components/hero'

const ProjectDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const project = projects.find(project => project.id === id)

  const { isMacbook, isDesktop } = useGetDevice()

  const showDescriptionFooter = isMacbook || isDesktop

  if (!project) {
    navigate(PAGES.NotFoundPage)
    return <></>
  }

  return (
    <Page
      title={project.name}
      decorationText={
        <TextOutlined viewBoxWidth={1470} type="header" animate>
          work
        </TextOutlined>
      }
      subtitleContent={
        <Information>
          <Tags
            type="wide"
            items={[
              <time
                dateTime={`${project.date.getFullYear()}-${
                  project.date.getMonth() + 1
                }-${project.date.getDate()}`}>
                {project.date.getFullYear()}
              </time>,
              project.type,
            ]}
          />
          <ServiceIcons>
            {project.servicesType.map(serviceType => (
              <ServiceIcon key={serviceType}>
                {serviceTypeToIcon[serviceType]}
              </ServiceIcon>
            ))}
          </ServiceIcons>
        </Information>
      }>
      <ProjectDetailHero
        image={project.detailPreviewImage}
        link={project.link}
      />

      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={680} animate>
            01
          </TextOutlined>
        }
        section="introduction"
        title={[project.name, project.about]}
        description={[<>{project.description}</>]}
        content={
          <HorizontalList
            title="we decided it will be"
            items={['simple', 'clear', 'accesible', 'locanic']}
          />
        }
      />

      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={800} animate>
            02
          </TextOutlined>
        }
        section="description"
        title={['native mobile apps for IOS & Android']}
        content={
          <PricesBlockStyled
            items={projectDetailsToPricesBlockItems(project.details)}
            remark={project.detailsRemark}
          />
        }
        footer={
          showDescriptionFooter && (
            <LeaveProjectDetails buttonText="i want the same" />
          )
        }
      />

      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={795} animate>
            03
          </TextOutlined>
        }
        section="wait for it...photos!"
        title={['here’s some pictures', `how locanic, isn't it?`]}
        description={project.picturesRemark}
        content=""
      />

      <ScrollableByOneList items={project.carousel} />
    </Page>
  )
}

export default ProjectDetailPage

const Information = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [8, null, null, null, 16, null, 48],
  }),
}))

const ServiceIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  ...getBreakpointsStylesByArray(theme, {
    gap: [8, null, null, null, 16, null, 29],
  }),
}))

const ServiceIcon = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    height: [24, null, null, null, 40, null, 64],
  }),
  svg: {
    height: '100%',
    width: 'auto',
  },
}))

const PricesBlockStyled = styled(PricesBlock)(({ theme }) => ({
  '& li': {
    ...getBreakpointsStylesByArray(theme, {
      paddingRight: [6, 0, null, null, 29, 0, 135, null, 114, 112],
    }),
  },
}))
