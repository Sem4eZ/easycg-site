import { styled } from '@mui/material/styles'

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
  return (
    <Container>
      <article>
        <ImageContainer>
          <ImagesWrapepr>
            <img src={image.main} alt={`${name}  employee`} />
            <HiddenImage className="hidden" src={image.hidden} alt="" />
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
  ...getBreakpointsStylesByArray(theme, {
    width: [144, '100%', 163, '100%', 352, 365, 454, null, 619],
  }),
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    magrinBottom: [4, null, null, null, 8],
  }),
}))

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  ...getBreakpointsStylesByArray(theme, {
    height: [226, null, null, 443, 438, null, 692, null, 862],
  }),
  backgroundColor: theme.palette.card.default,
  transition: 'background-color .2s',
  img: {
    ...getBreakpointsStylesByArray(theme, {
      height: [194, '100%', 194, '100%', 377, null, 596, null, 742],
      objectFit: ['unset', 'contain', 'unset', 'cover', 'unset'],
    }),
  },

  '&:hover': {
    backgroundColor: theme.palette.card.hover,
    '& .hidden': {
      display: 'block',
    },
  },
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

const ImagesWrapepr = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: '100%',
}))

const HiddenImage = styled('img')(() => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  display: 'none',
  transform: 'translateX(-50%)',
}))
