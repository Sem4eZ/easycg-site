import { styled } from '@mui/material/styles'

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
> & {
  zIndex: number
}

export const ProjectCard = ({
  id,
  name,
  date,
  description,
  image,
  type,
  servicesType,
  zIndex,
}: Props) => {
  return (
    <Container>
      <article style={{ zIndex }}>
        <Link href={`${PAGES.Projects}/${id}`}>
          <ImageContainer>
            <img
              className={PARALLAX_CLASS}
              src={image}
              alt={`${name} project`}
            />
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
  position: 'relative',
  listStyle: 'none',
  ...getBreakpointsStylesByArray(theme, {
    minWidth: [253, '100%', 253, '100%', 352, null, 454, 619],
    height: [290, 250, null, 479, 694, 944, null, 1107],
  }),
  transition: 'opacity 0.5s',
  '& article': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'width 0.5s',
  },
  [theme.breakpoints.up('laptop')]: {
    '&:hover': {
      '& article': {
        ...getBreakpointsStylesByArray(theme, {
          width: [253, '100%', 253, '100%', 352, null, 454 * 2, 619 * 2],
        }),
        '& .parallax': {
          transform: 'translateX(0) !important',
        },
        img: {
          width: '100%',
          objectFit: 'cover',
        },
      },
      '&+li': {
        ...getBreakpointsStylesByArray(theme, {
          opacity: [1, null, null, null, null, null, 0],
        }),
      },
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

const Link = styled('a')(() => ({
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
    display: ['none', null, null, null, '-webkit-box'],
    maxWidth: [253, '100%', 253, '100%', 352, null, 454, 619],
  }),
}))
