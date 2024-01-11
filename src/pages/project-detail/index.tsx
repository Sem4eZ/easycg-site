import { styled } from '@mui/material/styles'
import { PagePagination } from 'pages/project-detail/components/page-pagination'
import { useNavigate, useParams } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'

import { projects } from 'entities/project/data'
import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'
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
    <PageStyled
      title={project.name}
      titleSize="small"
      decorationText={
        <TextOutlined viewBoxWidth={1470} type="headerSmall">
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
      <ProjectDetailHero preview={project.detailPreview} link={project.link} />

      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={680} animate>
            01
          </TextOutlined>
        }
        section="introduction"
        title={[project.name]}
        description={[<>{project.about}</>]}
        content={
          <HorizontalList
            title="we decided it will be"
            items={['simple', 'clear', 'accesible', 'locanic']}
          />
        }
      />

      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={803} animate>
            02
          </TextOutlined>
        }
        section="description"
        title={['native mobile apps for IOS & Android']}
        description={[<>{project.description}</>]}
        footer={
          showDescriptionFooter && (
            <LeaveProjectDetails
              buttonText="i want the same"
              variant="contained"
            />
          )
        }
      />

      <PagePagination currentProjectId={project.id} />
    </PageStyled>
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

const PageStyled = styled(Page)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    left: [-184, -250, -198, -160, -150, -220, -300, -260, -420, -140],
    top: [-146, null, null, -141, -196, -196, -266, null, -380],
  }),
}))
