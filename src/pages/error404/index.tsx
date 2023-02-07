import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import {
  Image,
  getImagePath,
  getImageSrcSetByImageObj,
} from 'entities/image/types'
import { projects } from 'entities/project/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { maxWidth } from 'shared/theme'
import { Header } from 'shared/ui/header'
import { Link as LineLink } from 'shared/ui/link'
import { LFont, XXXLFont } from 'shared/ui/typography'

const image: Image = {
  path: '/assets/images/',
  name: '404',
  fileType: 'jpg',
  alt: '',
}

const Error404Page = () => {
  const imageSrcSet = getImageSrcSetByImageObj(image)

  return (
    <>
      <Header projectsCount={projects.length} />
      <main>
        <Picture>
          {imageSrcSet.map(imageSrcSetData => {
            return (
              <source
                key={imageSrcSetData.path}
                srcSet={imageSrcSetData.path}
                media={imageSrcSetData.media}></source>
            )
          })}

          <img src={getImagePath(image, 1920)} alt={image.alt} />
        </Picture>
        <Container>
          <XXXLFont>404</XXXLFont>
          <LinkStyled to={PAGES.HomePage}>
            <ComeBackText>come back</ComeBackText>&nbsp;
            <LineLink>
              <HomeText>home</HomeText>
            </LineLink>
          </LinkStyled>
        </Container>
      </main>
    </>
  )
}

export default Error404Page

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [37, 62, 122, null, 147, 180, 6, null, 150, 65],
    gap: [7, null, 0],
  }),
}))

const Picture = styled('picture')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    top: [0, null, null, null, null, null, null, null, -15],
  }),
}))

const ComeBackText = styled(LFont)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const HomeText = styled(LFont)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))
