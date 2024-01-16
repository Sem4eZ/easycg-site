import { styled } from '@mui/material/styles'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { getImagePath, getImageSrcSetByImageObj } from 'entities/image/types'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Tags } from 'shared/ui/tags'
import { LFont } from 'shared/ui/typography'

import { Article } from '../types'

type Props = Pick<
  Article,
  'id' | 'name' | 'date' | 'description' | 'image' | 'type'
>
export const ArticleCard = ({
  id,
  name,
  date,
  description,
  image,
  type,
}: Props) => {
  const imageSrcSet = getImageSrcSetByImageObj(image)
  return (
    <li>
      <Container to={`/blog/${id}`}>
        <article>
          <ImageContainer>
            <Picture>
              {imageSrcSet.map((imageSrcSetData, index) => {
                return (
                  <source
                    key={index}
                    srcSet={imageSrcSetData.path}
                    media={imageSrcSetData.media}></source>
                )
              })}
              <img src={getImagePath(image, 1920)} alt={image.alt} />
            </Picture>
            <Decorationfilter className="decorationFilter" />
          </ImageContainer>
          <Content>
            <Header>
              <TagsStyled
                items={[
                  <time dateTime={moment(date).format('YYYY-MM-DD')}>
                    {moment(date).format('YYYY-MM')}
                  </time>,
                  type,
                ]}
              />
              <Name>{name}</Name>
            </Header>

            <Description>{description}</Description>
          </Content>
        </article>
      </Container>
    </li>
  )
}

const Container = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'block',
  '&:hover': {
    '& .decorationFilter': {
      opacity: 1,
    },
  },
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    magrinBottom: [4, null, null, null, 8],
  }),
}))

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  overflow: 'hidden',
  ...getBreakpointsStylesByArray(theme, {
    height: [269, 212, null, 443, 517, null, 748, null, 862],
  }),
  backgroundColor: theme.palette.card.default,
  transition: 'background-color .2s',
}))

const Decorationfilter = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  opacity: 0,
  background: `${theme.palette.accent}33`,

  transition: 'opacity .5s',
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, null, null, 'block'],
  }),
}))

const Content = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [16, null, null, 24, 32, null, null, null, 48],
  }),
}))

const Header = styled('header')(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [4, null, null, null, 8],
    marginBottom: [0, null, null, 24, 32, null, null, null, 48],
  }),
}))

const Name = styled(LFont)(() => ({
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

const Description = styled('span')(({ theme }) => ({
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  maxWidth: '100%',
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, '-webkit-box'],
  }),
}))

const Picture = styled('picture')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  backgroundColor: '#cccccc',
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}))
