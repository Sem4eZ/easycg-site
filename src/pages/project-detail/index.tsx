import { styled } from '@mui/material/styles'
import { collection, getDocs } from 'firebase/firestore'
import moment from 'moment'
import { PagePagination } from 'pages/project-detail/components/page-pagination'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'

import { Project } from 'entities/project/types'
import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { db } from 'shared/firebase'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'
import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'
import { PricesBlock } from 'shared/ui/prices-block'
import { Tags } from 'shared/ui/tags'

import { ProjectDetailHero } from './components/hero'
import { VideoPreview } from './components/hero/video-preview'

const ProjectDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [projects, setProjects] = React.useState<Project[]>([])

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'projects'))
    const projectsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    setProjects(projectsData as Project[])
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!projects.length) {
      return
    }

    const project = projects.find(project => project.id === id)
    if (!project) {
      navigate(PAGES.NotFoundPage)
      return
    }

    navigate(`/projects/${id}`)
  }, [navigate, projects, id])

  const project = projects.find(project => project.id === id)

  const { isMacbook, isDesktop } = useGetDevice()
  const showDescriptionFooter = isMacbook || isDesktop

  if (!project) {
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
            items={[
              <time dateTime={moment(project.date).format('YYYY-MM-DD')}>
                {moment(project.date).format('YYYY-MM-DD')}
              </time>,
            ]}
          />
          <ServiceIcons>
            <ServiceIcon
              key={
                Array.isArray(project.servicesType)
                  ? (project.servicesType[0] as keyof typeof serviceTypeToIcon)
                  : (project.servicesType as keyof typeof serviceTypeToIcon)
              }>
              {Array.isArray(project.servicesType)
                ? serviceTypeToIcon[
                    project.servicesType[0] as keyof typeof serviceTypeToIcon
                  ]
                : serviceTypeToIcon[
                    project.servicesType as keyof typeof serviceTypeToIcon
                  ]}
            </ServiceIcon>
          </ServiceIcons>
        </Information>
      }>
      {/* <ProjectDetailHero preview={project.detailPreview} /> */}
      <Preview>
        <VideoPreview url={project.detailPreview} />
      </Preview>

      <RemarkContainer>
        <Remark>
          *Before we start, you should know one thing. Content that we made can
          be different from owner’s content. We gave an ideas, clients develop
          it themselves*Before we start, you should know one thing. Content that
          we made can be different from owner’s content. We gave an ideas,
          clients develop it themselves
        </Remark>
      </RemarkContainer>

      <FreeRightPartContainer
        number={
          <TextOutlined viewBoxWidth={680} animate>
            01
          </TextOutlined>
        }
        section="introduction"
        title={[project.titleAbout]}
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
        title={[project.titleDescription]}
        description={[project.description]}
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

const Preview = styled('div')(({ theme }) => ({
  position: 'relative',
}))

const RemarkContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'end',
  ...getBreakpointsStylesByArray(theme, {
    paddingRight: spaceArr,
    paddingLeft: spaceArr,
  }),
}))

const Remark = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [10, null, null, null, null, null, 25],
    lineHeight: [12, null, null, null, null, null, 30],
    width: [
      '100%',
      null,
      null,
      null,
      `calc(561px - ${spaceObj.tablet}px)`,
      `calc(640px - ${spaceObj.tablet_horizontal}px)`,
      `calc(864px - ${spaceObj.desktop_s}px)`,
      null,
      `calc(1077px - ${spaceObj.macbook}px)`,
      `calc(1087px - ${spaceObj.desktop}px)`,
    ],
    marginTop: [72, null, 50, 104, 93, 80, 184, null, 270, 248],
  }),
}))

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
