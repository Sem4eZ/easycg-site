import { styled } from '@mui/material/styles'
import { Link as ReactRouterDomLink } from 'react-router-dom'

import { getImagePath, getImageSrcSetByImageObj } from 'entities/image/types'
import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { spaceObj } from 'shared/theme'
import { PARALLAX_CLASS } from 'shared/ui/horizontal-list/scrollable'
import { Tags } from 'shared/ui/tags'
import { LFont } from 'shared/ui/typography'

import { Project } from '../types'

type Props = Pick<
  Project,
  'id' | 'name' | 'date' | 'description' | 'image' | 'type' | 'servicesType'
>

export const ProjectCard = ({
  id,
  name,
  date,
  description,
  image,
  type,
  servicesType,
}: Props) => {
  const imageSrcSet = getImageSrcSetByImageObj(image)
  return (
    <Container>
      <article>
        <Link to={`${PAGES.Projects}/${id}`}>
          <ImageContainer>
            <picture>
              {imageSrcSet.map(imageSrcSetData => {
                return (
                  <source
                    srcSet={imageSrcSetData.path}
                    media={imageSrcSetData.media}></source>
                )
              })}

              <img
                className={PARALLAX_CLASS}
                src={getImagePath(image, 1920)}
                alt={`${name} project`}
              />
            </picture>
          </ImageContainer>
          <Content>
            <Header>
              <HeaderLeftPart>
                <TagsStyled
                  items={[
                    <time
                      dateTime={`${date.getFullYear()}-${
                        date.getMonth() + 1
                      }-${date.getDate()}`}>
                      {date.getFullYear()}
                    </time>,
                    type,
                  ]}
                />
                <Name>{name}</Name>
              </HeaderLeftPart>
              <ServiceIcons>
                {servicesType.map(serviceType => (
                  <ServiceIcon key={serviceType}>
                    {serviceTypeToIcon[serviceType]}
                  </ServiceIcon>
                ))}
              </ServiceIcons>
            </Header>

            <Description>{description}</Description>
          </Content>
        </Link>
      </article>
    </Container>
  )
}

const Container = styled('li')(({ theme }) => ({
  listStyle: 'none',
  transition: 'min-width 2s',
  ...getBreakpointsStylesByArray(theme, {
    minWidth: [253, '100%', 253, '100%', 352, null, 454, null, 619],
  }),

  [theme.breakpoints.up('desktop_s')]: {
    '&:hover': {
      ...getBreakpointsStylesByArray(theme, {
        minWidth: [253, '100%', 253, '100%', 352, null, 454 * 2, null, 619 * 2],
      }),
      '& .parallax': {
        transform: 'translateX(0) !important',
      },
      img: {
        width: '100%',
        objectFit: 'cover',
      },
      transition: 'min-width 0.5s',
    },
  },

  '&:last-child': {
    ...getBreakpointsStylesByArray(theme, {
      marginRight: [
        spaceObj.se,
        0,
        spaceObj.ip13,
        0,
        spaceObj.tablet,
        spaceObj.tablet_horizontal,
        spaceObj.laptop,
        spaceObj.desktop,
      ],
    }),
  },
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
    height: [199, null, null, 370, 438, null, 692, 862],
  }),
  img: {
    height: '100%',
    ...getBreakpointsStylesByArray(theme, {
      width: ['100%', '100%', '100%', '100%', 'auto'],
      objectFit: ['cover', 'cover', 'cover', 'cover', 'unset'],
    }),
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
      null,
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
    marginBottom: [16, 0, null, null, 16, null, null, 0],
  }),
}))

const Description = styled('span')(({ theme }) => ({
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    WebkitLineClamp: ['3', null, null, null, null, null, null, null, '2'],
    display: ['none', null, null, null, '-webkit-box'],
    maxWidth: [253, '100%', 253, '100%', 352, null, 454, 619],
  }),
}))
