import { styled } from '@mui/material/styles'

import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Tags } from 'shared/ui/tags'

import { Project } from '../types'

type Props = Pick<
  Project,
  'id' | 'name' | 'image' | 'date' | 'servicesType' | 'type'
>

export const GalleryProjectCard = ({
  id,
  name,
  image,
  date,
  servicesType,
  type,
}: Props) => {
  return (
    <Container
      className="box"
      href={`${PAGES.Projects}/${id}`}
      data-groups={servicesType.join(',')}>
      <Image src={image} alt={name} />
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
          {name}
        </div>
        <ServiceIcons>
          {servicesType.map(serviceType => (
            <ServiceIcon key={serviceType}>
              {serviceTypeToIcon[serviceType]}
            </ServiceIcon>
          ))}
        </ServiceIcons>
      </Information>
      <Decorationfilter className="DecorationFilter" />
    </Container>
  )
}

const Container = styled('a')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  backgroundColor: 'gray',
  '&:hover .DecorationFilter': {
    opacity: 1,
  },
  padding: 72,
  textDecoration: 'none',
  color: theme.palette.text.primary,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
}))

const Image = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

const Information = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
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

const ServiceIcons = styled('div')(() => ({
  display: 'flex',
  gap: 8,
}))

const ServiceIcon = styled('div')(() => ({
  height: 32,
  svg: {
    height: '100%',
    width: 'auto',
  },
}))

const Decorationfilter = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.mode === 'dark' ? '#6456DD33' : '#BCDB0F33',
  transition: 'opacity .2s',
}))
