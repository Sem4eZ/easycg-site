import { styled } from '@mui/material/styles'
import { collection, getDocs } from 'firebase/firestore'
import moment from 'moment'
import { PagePagination } from 'pages/project-detail/components/page-pagination'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'

import { getImageSrcSetByImageObj } from 'entities/image/types'
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

  // const imageSrcSet = getImageSrcSetByImageObj(
  //   article?.detailPreviewImage || {},
  // )

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
              <time dateTime={moment(project.date).format('YYYY')}>
                {moment(project.date).format('YYYY')}
              </time>,
              project.type,
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
        {project.detailPreview ? (
          <video
            key={project.detailPreview}
            loop
            controls={false}
            style={{ width: '100%', height: 'auto' }}
            autoPlay
            muted
            playsInline>
            <source
              src={project.detailPreview}
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            <source src={project.detailPreview} type="video/webm" />
            <source src={project.detailPreview} type="video/mp4" />
            <source src={project.detailPreview} type="video/ogg" />
            <p>
              Если вы видите эту надпись, значит ваш браузер не поддерживает
              видео HTML5.
            </p>
          </video>
        ) : (
          <PictureContainer>
            <Picture>
              <img
                src="/assets/images/projects/detail_preview.png" // Нужно поменять на существующую картинку вместо заглушки!
                alt="Картинка выполненной работы"
              />
            </Picture>
          </PictureContainer>
        )}
      </Preview>
      {/* <RemarkContainer>
        <Remark>
          *Before we start, you should know one thing. Content that we made can
          be different from owner’s content. We gave an ideas, clients develop
          it themselves*Before we start, you should know one thing. Content that
          we made can be different from owner’s content. We gave an ideas,
          clients develop it themselves
        </Remark>
      </RemarkContainer> */}

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
            title="we decided it would be"
            items={['modern', 'сreative', 'impressive', 'exciting']}
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
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  // paddingLeft: '10px',
  // paddingRight: '10px',
  overflow: 'hidden',
  '& iframe': {
    width: '1688px',
    height: '950px', // Высота для разрешения 1920x1080
    border: 'none',
  },
  '@media (max-width: 1670px)': {
    '& iframe': {
      maxeight: '930px', // Высота для разрешения менее 1600px
    },
  },
  '@media (max-width: 1500px)': {
    '& iframe': {
      height: '800px', // Высота для разрешения от 1500px до 1400px
    },
  },
  '@media (max-width: 1400px)': {
    '& iframe': {
      height: '750px', // Высота для разрешения от 1400px до 1300px
    },
  },
  '@media (max-width: 1300px)': {
    '& iframe': {
      height: '700px', // Высота для разрешения от 1300px до 1200px
    },
  },
  '@media (max-width: 1200px)': {
    '& iframe': {
      height: '650px', // Высота для разрешения от 1200px до 1100px
    },
  },
  '@media (max-width: 1100px)': {
    '& iframe': {
      height: '600px', // Высота для разрешения менее 1100px и до 1000px
    },
  },
  '@media (max-width: 1000px)': {
    '& iframe': {
      height: '550px', // Высота для разрешения менее 1000px и до 900px
    },
  },
  '@media (max-width: 900px)': {
    '& iframe': {
      height: '500px', // Высота для разрешения менее 900px и до 800px
    },
  },
  '@media (max-width: 800px)': {
    '& iframe': {
      height: '450px', // Высота для разрешения менее 900px и до 800px
    },
  },
  '@media (max-width: 700px)': {
    '& iframe': {
      height: '400px', // Высота для разрешения менее 900px и до 800px
    },
  },
  '@media (max-width: 600px)': {
    '& iframe': {
      height: '350px', // Высота для разрешения менее 900px и до 800px
    },
  },
  '@media (max-width: 500px)': {
    '& iframe': {
      height: '300px', // Высота для разрешения менее 900px и до 800px
    },
  },
  '@media (max-width: 400px)': {
    '& iframe': {
      height: '250px', // Высота для разрешения менее 900px и до 800px
    },
  },
  '@media (max-width: 300px)': {
    '& iframe': {
      height: '200px', // Высота для разрешения менее 900px и до 800px
    },
  },
  // Добавьте дополнительные медиа-запросы по мере необходимости
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

const PageStyled = styled(Page)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    left: [-184, -250, -198, -160, -150, -220, -300, -260, -420, -140],
    top: [-146, null, null, -141, -196, -196, -266, null, -380],
  }),
}))

const PictureContainer = styled('div')(({ theme }) => ({
  width: '100wh',
  display: 'flex',
  justifyContent: 'center', // Центрируем содержимое по горизонтали
  alignItems: 'center', // Центрируем содержимое по вертикали
  // height: '100vh', // Высота экрана
  overflow: 'hidden', // Обрезаем избыточное содержимое
}))

const Picture = styled('picture')(({ theme }) => ({
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  ...getBreakpointsStylesByArray(theme, {}),
}))
