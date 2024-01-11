import { styled } from '@mui/material/styles'
import moment from 'moment'
import { Link as ReactRouterDomLink } from 'react-router-dom'

import { getImagePath, getImageSrcSetByImageObj } from 'entities/image/types'
import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { Tags } from 'shared/ui/tags'
import { LFont } from 'shared/ui/typography'

import { Project } from '../types'

type Props = Pick<
  Project,
  'id' | 'name' | 'date' | 'image' | 'type' | 'servicesType'
>

export const GalleryProjectCard = ({
  id,
  name,
  date,
  image,
  type,
  servicesType,
}: Props) => {
  const servicesTypeArray = [...servicesType].join('')
  const imageSrcSet = getImageSrcSetByImageObj(image)
  console.log('servicesTypeArray:', servicesTypeArray) // Добавим вывод в консоль

  return (
    <Container>
      <article>
        <Link to={`${PAGES.Projects}/${id}`}>
          <ImageContainer>
            <picture>
              {imageSrcSet.map(imageSrcSetData => {
                return (
                  <source
                    key={imageSrcSetData.path}
                    srcSet={imageSrcSetData.path}
                    media={imageSrcSetData.media}></source>
                )
              })}

              <img src={getImagePath(image, 1920)} alt={image.alt} />
            </picture>
          </ImageContainer>
          <Content>
            <Header>
              <HeaderLeftPart>
                <TagsStyled
                  items={[
                    <time dateTime={moment(date).format('YYYY-MM-DD')}>
                      {moment(date).format('YYYY-MM')}
                    </time>,
                    type,
                  ]}
                />
                <Name>{name}</Name>
              </HeaderLeftPart>
              <ServiceIcons>
                <ServiceIcon
                  key={servicesTypeArray as keyof typeof serviceTypeToIcon}>
                  {
                    serviceTypeToIcon[
                      servicesTypeArray as keyof typeof serviceTypeToIcon
                    ]
                  }
                </ServiceIcon>
              </ServiceIcons>
            </Header>
          </Content>
        </Link>
      </article>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  listStyle: 'none',
  ...getBreakpointsStylesByArray(theme, {
    width: ['100%', null, 253, '100%', null, null, 317, null, 433, 428],
  }),
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    magrinBottom: [4, null, null, null, 8],
  }),
}))

const ImageContainer = styled('div')(({ theme }) => ({
  borderRadius: '10px',
  overflow: 'hidden',
  ...getBreakpointsStylesByArray(theme, {
    height: [212, null, 353, 370, 405, null, 484, null, 590, 603],
  }),
  picture: {
    display: 'block',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    transition: 'transform .5s',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  '&:hover': {
    picture: {
      transform: 'scale(1.3)',
    },
  },
}))

const Link = styled(ReactRouterDomLink)(() => ({
  display: 'block',
  textDecoration: 'unset',
  color: 'inherit',
}))

const Content = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [16, null, null, 24, 32, null, null, 48],
  }),
}))

const Header = styled('header')(({ theme }) => ({
  display: 'grid',
  gridColumnGap: pxToRem(20),
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [16, null, null, 24, 32, null, null, 48],
    gridTemplateColumns: [
      'auto',
      '1fr auto',
      null,
      'auto',
      '1fr auto',
      'auto',
      null,
      null,
      '1fr auto',
    ],
  }),
}))

const HeaderLeftPart = styled('div')(() => ({
  overflow: 'hidden',
}))

const ServiceIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  ...getBreakpointsStylesByArray(theme, {
    gap: [8, null, null, null, 12],
  }),
}))

const ServiceIcon = styled('div')(({ theme }) => ({
  '& svg': {
    height: '100%',
    width: 'auto',
  },
  ...getBreakpointsStylesByArray(theme, {
    height: [24, null, null, null, 46],
  }),
}))

const Name = styled(LFont)(({ theme }) => ({
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [16, 0, null, 16, 0, 24, 32, null, 0],
  }),
}))
