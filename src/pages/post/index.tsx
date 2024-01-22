import { Box, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'
import DOMPurify from 'dompurify'
import { doc, getDoc } from 'firebase/firestore'
import moment from 'moment'
import { Suspense, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getImagePath, getImageSrcSetByImageObj } from 'entities/image/types'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { articleSpaceArr, maxWidth, spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

import { db } from '../../shared/firebase'

const PostPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [article, setArticle] = useState<any>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (!id) {
          navigate(PAGES.NotFoundPage)
          return
        }

        const postDoc = await getDoc(doc(db, 'posts', id))

        if (postDoc.exists()) {
          setArticle({ id: postDoc.id, ...postDoc.data() })
        } else {
          navigate(PAGES.NotFoundPage)
        }
      } catch (error) {
        console.error('Error fetching article:', error)
      }
    }

    fetchArticle()
  }, [id, navigate])

  if (!article) {
    return (
      <div>
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      </div>
    )
  }

  const imageSrcSet = getImageSrcSetByImageObj(
    article?.detailPreviewImage || {},
  )

  return (
    <PageStyled
      title={article?.name || ''}
      titleSize="small"
      decorationText={
        <TextOutlined viewBoxWidth={1480} type="headerSmall">
          blog.
        </TextOutlined>
      }
      subtitleContent={
        <Remark>
          <>{article?.remark}</>
        </Remark>
      }
      type="article">
      <PictureContainer>
        <Picture>
          {imageSrcSet.map((imageSrcSetData: any) => (
            <source
              key={`${imageSrcSetData.path}_${id}`}
              srcSet={imageSrcSetData.path}
              media={imageSrcSetData.media}></source>
          ))}
          <img
            src={getImagePath(article?.detailPreviewImage || {}, 1920)}
            alt={article?.detailPreviewImage?.alt || ''}
          />
        </Picture>
      </PictureContainer>

      <Content style={{ marginTop: 50 }}>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article?.content || ''),
          }}
        />
      </Content>
    </PageStyled>
  )
}

export default PostPage

const LoaderContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30vh',
  '& span': {
    color: theme.palette.accent,
  },
}))

const Content = styled('article')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, null, null, 16, null, 25],
    lineHeight: [24, null, null, null, 28.8, null, 48],
    paddingLeft: articleSpaceArr,
    paddingRight: articleSpaceArr,
    marginBottom: [88, 94, 73, 134, 93, 91, 37, null, 0, 207],
  }),
  '& h2': {
    fontWeight: 700,
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [25, null, null, null, null, null, 38, null, 68],
      lineHeight: [30, null, null, null, null, null, 51, null, 83],
      marginTop: [36, null, 40, null, 56, null, 72],
      marginBottom: [36, null, 40, null, 56, null, 72],
    }),
  },
  '& section': {
    ...getBreakpointsStylesByArray(theme, {
      marginTop: [112, 128, 104, 80, 112, 170, 179, null, 160],
      marginBottom: [112, 128, 104, 80, 112, 170, 179, null, 160],
    }),
  },
  '& p': {
    ...getBreakpointsStylesByArray(theme, {
      marginTop: [36, null, 32, null, 48, null, 56],
      marginBottom: [36, null, 32, null, 48, null, 56],
    }),
  },
  '& a': {
    color: theme.palette.accent,
    textDecoration: 'none',
  },
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

const Remark = styled('div')(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, null, null, null, null, 32],
    lineHeight: [19, null, null, null, null, null, 51],
    marginTop: [8, 0, null, 8, 0, null, 64, null, 24, 56],
    color: [
      theme.palette.text.primary,
      null,
      null,
      null,
      theme.palette.text.secondary,
    ],
  }),
  '& p': {
    ...getBreakpointsStylesByArray(theme, {
      marginTop: [8, null, 0],
      marginBottom: [8, null, 0],
    }),
  },
}))

const PageStyled = styled(Page)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    left: [-196, -260, -200, -120, -160, -210, -300, -200, -450, -130],
    top: [-146, -150, -146, -141, -196, -196, -266, null, -380],
  }),
}))
