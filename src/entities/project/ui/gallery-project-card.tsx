import { styled } from '@mui/material/styles'
import { Fragment } from 'react'

import { serviceTypeToIcon } from 'entities/services/data'

import { PAGES } from 'shared/config'
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
      <div>
        <Tags
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
        <div>
          {servicesType.map(serviceType => (
            <Fragment key={serviceType}>
              {serviceTypeToIcon[serviceType]}
            </Fragment>
          ))}
        </div>
      </div>
      <Decorationfilter className="DecorationFilter" />
    </Container>
  )
}

const Container = styled('a')(() => ({
  display: 'block',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  '&:hover .DecorationFilter': {
    opacity: 1,
  },
}))

const Decorationfilter = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  height: '100%',
  width: '100%',
  backgroundColor: '#6456DD33',
  transition: 'opacity .2s',
}))
