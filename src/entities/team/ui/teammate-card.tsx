import { styled } from '@mui/material/styles'

import { getImagePath, getImageSrcSetByImageObj } from 'entities/image/types'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Tags } from 'shared/ui/tags'
import { LFont } from 'shared/ui/typography'

import { Teammate } from '../types'

type Props = Pick<
  Teammate,
  'name' | 'date' | 'description' | 'image' | 'position'
>

export const TeammateCard = ({
  name,
  date,
  description,
  image,
  position,
}: Props) => {
  const imageMainSrcSet = getImageSrcSetByImageObj(image.main)
  // const imageHiddenSrcSet = getImageSrcSetByImageObj(image.hidden)
  return (
    <Container>
      <article>
        <ImageContainer>
          <ImagesWrapepr>
            <Picture>
              {imageMainSrcSet.map(imageSrcSetData => {
                return (
                  <source
                    key={imageSrcSetData.path}
                    srcSet={imageSrcSetData.path}
                    media={imageSrcSetData.media}></source>
                )
              })}

              <img src={getImagePath(image.main, 1920)} alt={image.main.alt} />
            </Picture>

            {/* <HiddenImage className="hidden">
              {imageHiddenSrcSet.map(imageSrcSetData => {
                return (
                  <source
                    key={imageSrcSetData.path}
                    srcSet={imageSrcSetData.path}
                    media={imageSrcSetData.media}></source>
                )
              })}

              <img src={getImagePath(image.hidden, 1920)} alt="" />
            </HiddenImage> */}
          </ImagesWrapepr>
        </ImageContainer>
        <Content>
          <Header>
            <TagsStyled
              items={[
                <time
                  dateTime={`${date.getFullYear()}-${
                    date.getMonth() + 1
                  }-${date.getDate()}`}>
                  {date.getFullYear()}
                </time>,
                position,
              ]}
            />
            <Name>{name}</Name>
          </Header>

          <Description>{description}</Description>
        </Content>
      </article>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  marginLeft: '20px',
  marginRight: '10px',
  ...getBreakpointsStylesByArray(theme, {
    width: [250, 300, 330, 360, 315, 365, 497, null, 619],
  }),
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [4, null, null, null, 8],
  }),
}))

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  overflow: 'hidden',
  ...getBreakpointsStylesByArray(theme, {
    height: [383, 420, 480, 493, 438, 520, 692, null, 862],
  }),
  backgroundColor: theme.palette.card.default,
  transition: 'background-color .2s',

  // '&:hover': {
  //   backgroundColor: theme.palette.card.hover,
  //   '& .hidden': {
  //     display: 'flex',
  //   },
  // },
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
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  maxWidth: '100%',
  color: theme.palette.text.secondary,
  display: 'block', // Переключение на блочный элемент
}))

const ImagesWrapepr = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: '100%',
}))

const Picture = styled('picture')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  ...getBreakpointsStylesByArray(theme, {
    height: [
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
    ],
    width: [
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '100%',
      '497px',
      '497px',
      '619px',
    ],
    objectFit: ['fill', 'fill', 'cover', 'cover', 'cover'],
  }),
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'fill',
  },
}))
