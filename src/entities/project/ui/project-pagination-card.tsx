import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import { getImagePath } from 'entities/image/types'
import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Tags } from 'shared/ui/tags'

import { Project } from '../types'

type Props = Pick<
  Project,
  'id' | 'date' | 'type' | 'name' | 'servicesType' | 'image'
>

export const ProjectPaginationCard = ({
  id,
  date,
  type,
  name,
  servicesType,
  image,
}: Props) => {
  return (
    <Container to={`${PAGES.Projects}/${id}`}>
      <Image src={getImagePath(image, 400)} alt={image.alt} />
      <Information>
        <div>
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
        </div>
        <ServiceIcons>
          {servicesType.map(serviceType => (
            <ServiceIcon key={serviceType}>
              {serviceTypeToIcon[serviceType]}
            </ServiceIcon>
          ))}
        </ServiceIcons>
      </Information>
    </Container>
  )
}

const Container = styled(Link)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  ...getBreakpointsStylesByArray(theme, {
    width: [400, null, null, null, null, null, null, null, 352, 400],
  }),
}))

const Image = styled('img')(({ theme }) => ({
  height: 212,
  objectFit: 'cover',
  width: '100%',
  borderRadius: '10px',
}))

const Information = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  ...getBreakpointsStylesByArray(theme, {
    flexDirection: ['column', 'row', null, 'column', 'row', 'column', 'row'],
    width: ['100%', null, null, null, null, null, 'auto'],
    gap: [16, null, null, null, 24, null, 32],
  }),
}))

const TagsStyled = styled(Tags)(({ theme }) => ({
  marginBottom: 8,
  '& > li': {
    color: theme.palette.text.primary,
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [10, null, null, 16],
      lineHeight: [12, null, null, 19],
    }),
  },
}))

const Name = styled('span')(({ theme }) => ({
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [25],
    lineHeight: [30],
  }),
}))

const ServiceIcons = styled('div')(() => ({
  display: 'flex',
  gap: 8,
}))

const ServiceIcon = styled('div')(({ theme }) => ({
  height: 32,
  svg: {
    height: '100%',
    width: 'auto',
  },
}))
