import { styled } from '@mui/material/styles'
import { useNavigate, useParams } from 'react-router-dom'

import { articles } from 'entities/article/data'
import { getImagePath, getImageSrcSetByImageObj } from 'entities/image/types'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { articleSpaceArr, maxWidth, spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

const PostPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const article = articles.find(article => article.id === id)

  if (!article) {
    navigate(PAGES.NotFoundPage)
    return <></>
  }

  const imageSrcSet = getImageSrcSetByImageObj(article.detailPreviewImage)

  return (
    <Page
      title={article.name}
      titleSize="small"
      decorationText={
        <TextOutlined viewBoxWidth={1480} type="header" animate>
          blog.
        </TextOutlined>
      }
      subtitleContent={
        <Remark>
          {article.remark.map(remark => (
            <p>{remark}</p>
          ))}
        </Remark>
      }
      type="article">
      <PictureContainer>
        <Picture>
          {imageSrcSet.map(imageSrcSetData => {
            return (
              <source
                key={imageSrcSetData.path}
                srcSet={imageSrcSetData.path}
                media={imageSrcSetData.media}></source>
            )
          })}
          <img
            src={getImagePath(article.detailPreviewImage, 1920)}
            alt={article.detailPreviewImage.alt}
          />
        </Picture>
      </PictureContainer>
      <Content>{article.content}</Content>
    </Page>
  )
}

export default PostPage

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
      fontSize: [25, null, null, null, null, null, 42, null, 68],
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
  backgroundColor: '#cccccc',
  ...getBreakpointsStylesByArray(theme, {
    height: [270, null, null, 474, 499, null, 1029],
  }),
}))

const Picture = styled('picture')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
}))

const Remark = styled('div')(({ theme }) => ({
  fontWeight: 900,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, null, null, null, null, 42],
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
